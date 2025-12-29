import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import login from "./login";
import { AuthContext } from "/src/App";

export default function Login() {


    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Container id="login-form">
            <h2>Login</h2>
            <Form>

                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter username" />
                    <Form.Text className="text-muted">
                        Error
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={(e) => {
                    e.preventDefault();
                    login(auth, navigate);
                }} variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </Container>
    );
}