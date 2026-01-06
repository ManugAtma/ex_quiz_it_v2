import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Container, Form, Button, Spinner } from "react-bootstrap";

import { AuthContext } from "@/components/Layout";
import { SettingsContext } from "@/App";
import login from "@/services/login";


/**
 * @component
 * A login form for entering username and password.
 * Redirects to the user's page if already authenticated.
 * Shows error messages and a spinner while submitting.
 *
 * @returns {JSX.Element} A Container with the login form, inputs, error box, and submit button.
 */

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [fetching, setFetching] = useState(false);

    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();

    if (auth.authenticated) {
        return <Navigate to={`/user/${auth.userId}`} replace />;
    }

    return (
        <Container id="login-form">
            
            <div className="mb-4">
                <h2>Login</h2>
            </div>

            <div className="mt-3 mb-4 text-success"><p>Try username: John, password: doe</p></div>
            
            
            <Form className="mt-2">

                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" disabled={fetching} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" disabled={fetching} />
                </Form.Group>

                <Form.Group className="mb-3" id="login-error-box">
                    <Form.Text className="text-danger">
                        {true && error}
                    </Form.Text>
                </Form.Group>

                <div className="d-flex">
                    <Button onClick={(e) => {
                        e.preventDefault();
                        login(setAuth, navigate, username, password, setError, setFetching);
                    }} variant="primary" type="submit" disabled={fetching}>
                        Login
                    </Button>
                    <div className="d-flex align-items-center ms-3">
                        {fetching && <Spinner className="text-primary" />}
                    </div>
                </div>

            </Form>

        </Container>
    );
}