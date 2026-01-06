import { useContext, useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { SettingsContext } from "@/App";
import { AuthContext } from "@/components/Layout";
import LoadingHandler from '@/components/LoadingHandler';

import Categories from './Categories';
import SavedAlert from './SavedAlert';
import ServerError from './ServerError';
import Setting from './Setting';

// duration for which alerts are shown to user in ms
const DELAY = 2000;


/**
 * @component
 * Top level component of the settings page of the website.
 * 
 * @returns {JSX.Element} A form for the user to change the game settings: 
 * amount of questions, category, difficulty. Or a loading animation 
 * if data is not fetched yet.
 */

function Settings() {

    const [settings] = useContext(SettingsContext);
    const [, , , categories, categoriesError] = useContext(SettingsContext)
    const [auth, setAuth] = useContext(AuthContext);

    const [showServerError, setShowServerError] = useState(false);
    const [showSavedAlert, setShowSavedAlert] = useState(false);

    // for form
    const [amount, setAmount] = useState(settings.current.amount);
    const [category, setCategory] = useState(settings.current.category);
    const [difficulty, setDifficulty] = useState(settings.current.difficulty);



    async function saveSettings(e) {
        e.preventDefault();

        // save locally
        settings.current = {
            amount,
            category,
            difficulty
        };

        const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

        // save in DB
        const res = await fetch(`${BACKEND_BASE_URL}/user/${auth.userId}/settings`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(settings.current)
        });

        if (res.ok) {
            setShowSavedAlert(true);
        } else {
            if (res.status == 401) {
                setAuth({
                    userId: "",
                    username: "",
                    authenticated: false
                });
            } else {
                setShowServerError(true);
            }
        }
    }

    return (
        <LoadingHandler data={categories} error={categoriesError}>
            <Container className='mt-2' id="settings-form">
                <h2 className='borsok-font'>Settings</h2>
                <Form onSubmit={saveSettings}>

                    <Setting
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        label={"Amount of Questions per Game"}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </Setting>

                    <Setting
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        label={"Category"}
                    >
                        <option value="" key="mix">Mixed</option>
                        <Categories categories={categories?.trivia_categories} />
                    </Setting>

                    <Setting
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}
                        label={"Difficulty"}
                    >
                        <option value="">Mixed</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Setting>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                    <Button as={NavLink} to={`/user/${auth.userId}/play`} className="ms-2">play</Button>

                    {
                        showSavedAlert
                            ? <SavedAlert setShowAlert={setShowSavedAlert} delay={DELAY} />
                            : ""
                    }
                    {
                        showServerError
                            ? <ServerError setShowAlert={setShowServerError} delay={DELAY} />
                            : ""
                    }
                </Form>
            </Container>
        </LoadingHandler>
    )
}

export default Settings;