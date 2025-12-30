import { createContext, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, RouterProvider, useNavigate, Outlet, useLoaderData } from "react-router-dom";

import { API_CATEGORIES_URL, API_TOKEN_URL } from "./config";

import Layout from "./components/Layout";
import Play from './pages/play/Play';
import Settings from "./pages/settings/Settings";
import About from './pages/about/About';
import useFetch from "./util/useFetch";
import { router } from './router/router';

// TODO remove this import
import { categories, token } from "./testObjects";


const SettingsContext = createContext();
const AuthContext = createContext();

/**
 * @component
 * Top level component of the website.
 * Fetches available categories from the API to pass it to Settings.
 * Fetches a session token from the API to pass it to Play. 
 * 
 * @returns {JSX.Element} The React element tree containing the Settings context provider 
 * and the router with all the pages of the app surrounded by the layout.
 */

function App() {

    // create var to save setting top level to keep them across rerenders/navigation
    const settings = useRef({
        amount: 10,
        category: "",
        difficulty: "",
    });

    // create var to save token top level to keep it across rerenders/navigation, 
    const tokenRef = useRef({ token: "" });

    const auth = useRef({
        authenticated: false,
        username: "",
        userId: "",
    });


    const payload = useLoaderData();
    if (payload) {
        const userinfo = payload.userinfo;
        auth.current.userId = userinfo.id;
        auth.current.username = userinfo.username;
        auth.current.authenticated = true;
        settings.current = payload.savedSettings
    }

    


    // fetch /me to restore session if JWT still valid
    useEffect(() => {
        // const restore = async () => {

        //     const res = await fetch("http://localhost:3000/me", { credentials: "include" });

        //     if (!res.ok) {
        //         console.log("session could not be restored");
        //         return;
        //     }

        //     // restore session
        //     const payload = await res.json();
        //     const userinfo = payload.userinfo;
        //     auth.current.userId = userinfo.id;
        //     auth.current.username = userinfo.username;
        //     auth.current.authenticated = true;

        //     settings.current = payload.savedSettings

        // }
        // restore();
    }, []);

    //const [categories, categoriesError] = useFetch(API_CATEGORIES_URL);
    const categoriesError = null;

    //const [token, tokenError] = useFetch(API_TOKEN_URL);
    const tokenError = null;

    return (
        <AuthContext.Provider value={auth.current}>
            <SettingsContext.Provider value={[settings, token, tokenError, categories, categoriesError]}>
                {/* <RouterProvider router={router} /> */}
                <Outlet />
            </SettingsContext.Provider>
        </AuthContext.Provider>
    );
}

export { App, SettingsContext, AuthContext };