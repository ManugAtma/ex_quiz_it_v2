import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { AuthContext } from "@/components/Layout";
import { SettingsContext } from "@/App";

import login from "./login";



export default function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();

    if (auth.authenticated){
         return <Navigate to={`/user/${auth.userId}`} replace />;
    }

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
                    login(setAuth, navigate);
                }} variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </Container>
    );
}