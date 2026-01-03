import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";

import { AuthContext } from "@/components/Layout";
import useFetch from "@/util/useFetch";

import { SettingsContext } from "../../App";


export default function Welcome() {

    const [settings] = useContext(SettingsContext);

    const [auth] = useContext(AuthContext);
    const userName = auth.username;

    // fetch and store settings so that they are available for a game
    const [userSettings, error,] = useFetch(`http://localhost:3000/user/${auth.userId}/settings`, [], { credentials: "include" });
    useEffect(() => {
        if (userSettings) {
            settings.current = userSettings;
        }
    }, [userSettings]);

    return (
        <>
            <h2>Welcome {userName}</h2>
        </>
    );
}