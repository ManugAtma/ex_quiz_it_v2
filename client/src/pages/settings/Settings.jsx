import { useContext, useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

import { SettingsContext } from "@/App";
import { AuthContext } from "@/components/Layout";
import LoadingHandler from '@/components/LoadingHandler';

import Categories from './Categories';
import SavedAlert from './SavedAlert';
import Setting from './Setting';


/**
 * @component
 * Top level component of the settings page of the website.
 * 
 * @param {Object} data a promise object that may resolves to an object containing data fetched from the api
 * @param {Object} error a promise object that may resolves to an object containing the error returned by the server
 * @returns {JSX.Element} A form for the user to change the game settings: amount of questions, category, difficulty. Or a loading animation if data is not fetched yet.
 */

function Settings() {

    //const categories = data?.trivia_categories;
    const [settings] = useContext(SettingsContext);
    const [amount, setAmount] = useState(settings.current.amount);
    const [category, setCategory] = useState(settings.current.category);
    const [difficulty, setDifficulty] = useState(settings.current.difficulty);
    const [, , , categories, categoriesError] = useContext(SettingsContext)
    const [showAlert, setShowAlert] = useState(false);
    const auth = useContext(AuthContext);

    async function saveSettings(e) {
        e.preventDefault();

        // save locally
        settings.current = {
            amount,
            category,
            difficulty
        };

        // save in DB
        const res = await fetch(`http://localhost:3000/user/${auth.userId}/settings`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(settings.current)
        });

        if (res.ok) {
            setShowAlert(true);
        } else {
            // TODO 
        }
    }

    return (
        <LoadingHandler data={categories} error={categoriesError}>
            <Container className='mt-2'>
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

                    {
                        showAlert
                            ? <SavedAlert setShowAlert={setShowAlert} delay={2000} />
                            : ""
                    }
                </Form>
            </Container>
        </LoadingHandler>
    )
}

export default Settings;