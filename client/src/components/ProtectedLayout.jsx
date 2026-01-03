import { Outlet } from "react-router-dom";

import Unauthorized from "../pages/login/Unauthorized";
import { AuthContext } from "@/components/Layout";
import { useContext } from "react";


/**
 * @component
 * Wrapper for all sections and associated components of the page that
 * require authentication: Welcome, Play, Settings, Stats.   
 * 
 * @returns {JSX.Element} - One of the Components of the protected section 
 * if the current user is authenticated successfully or the Unauthorized 
 * component if the current user is not authenticated successfully.
 */
export default function ProtectedLayout() {

    const [auth] = useContext(AuthContext);
    const authenticated = auth.authenticated;

    // handle case where jwt is still being verified, loading etc

    return (
        authenticated ? <Outlet /> : <Unauthorized />
    );
}