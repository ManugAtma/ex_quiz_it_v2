import { Outlet } from "react-router-dom";

import Unauthorized from "../pages/login/Unauthorized";
import { AuthContext } from "@/components/Layout";
import { useContext } from "react";

export default function ProtectedLayout() {

    const auth = useContext(AuthContext);
    const authenticated = auth.authenticated;
    console.log(`ProtectedLayout: ${auth.authenticated}`);

    // handle case where jwt is still being verified, loading etc

    return (
        authenticated ? <Outlet /> : <Unauthorized />
    );
}