import { NavLink } from "react-router-dom";

export default function Unauthorized() {
    return (
        <>
            <h2>you must be logged in to view this.</h2>
            <NavLink to="/login">Go to login</NavLink>
        </>
    );
}