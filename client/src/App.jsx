import { createContext, useRef } from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

import { API_CATEGORIES_URL, API_TOKEN_URL } from "./config";

import Layout from "./components/Layout";
import Play from './pages/play/Play';
import Settings from "./pages/settings/Settings";
import About from './pages/about/About';
import useFetch from "./util/useFetch";
import { router } from './router/router';


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

    // check api/me to restore auth status, settings, user name (welcome screen) and api token

    const [categories, categoriesError] = useFetch(API_CATEGORIES_URL);

    const [token, tokenError] = useFetch(API_TOKEN_URL);

    return (
        <AuthContext.Provider value={auth.current}>
            <SettingsContext.Provider value={[settings, token, tokenError, categories, categoriesError]}>
                <RouterProvider router={router} />
            </SettingsContext.Provider>
        </AuthContext.Provider>
    );
}

export { App, SettingsContext, AuthContext };