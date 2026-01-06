import { useContext, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

import { AuthContext } from "@/components/Layout";
import useFetch from "@/util/useFetch";

import { SettingsContext } from "../../App";


export default function Welcome() {

    const [settings] = useContext(SettingsContext);

    const [auth] = useContext(AuthContext);
    const userName = auth.username;

    // fetch and store settings to make them available for a game
    const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    const [userSettings, error,] = useFetch(`${BACKEND_BASE_URL}/user/${auth.userId}/settings`, [], { credentials: "include" });
    useEffect(() => {
        if (userSettings) {
            settings.current = userSettings;
        }
    }, [userSettings]);

    return (
        <>
            <>
                <Container className='d-flex justify-content-center align-items-center mt-2 mb-2'>
                    <h2 className='borsok-font'>Hi
                        <span className="text-success"> {userName}</span> and welcome back to
                        <span className="text-warning"> Ex</span>
                        <span className="text-success">Quiz</span>
                        <span className="text-danger">It </span>
                    </h2>
                    <FontAwesomeIcon icon={faFaceGrinHearts} size="2x" className={`text-success fa-fw mb-3`} style={{ marginLeft: "0.1em" }} />
                </Container>

                <Container className="d-flex justify-content-center align-items-center">
                    <Card className="border border-3 border-primary" id="welcome-text-box">
                        <Card.Body >
                            <Card.Text>
                                Press play to start a new game. Go to settings to adjust games to your preferences.
                            </Card.Text>
                            <Button as={NavLink} to={`/user/${auth.userId}/play`} className="ms-2">play</Button>
                            <Button as={NavLink} to={`/user/${auth.userId}/settings`} className="ms-2">settings</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        </>
    );
}