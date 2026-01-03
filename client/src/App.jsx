import { createContext, useContext, useEffect, useRef } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import { AuthContext } from "./components/Layout";

// TODO remove this import
import { categories, token } from "./testObjects";


const SettingsContext = createContext();

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

    const [auth, setAuth] = useContext(AuthContext)

    const payload = useLoaderData();

    useEffect(() => {
        if (payload) {
            const userinfo = payload.userinfo;
            setAuth({
                userId: userinfo.id,
                username: userinfo.username,
                authenticated: true
            });
        } else {
             setAuth({
                userId: "",
                username: "",
                authenticated: false
            });
        }
    }, []);


    //const [categories, categoriesError] = useFetch(API_CATEGORIES_URL);
    const categoriesError = null;

    //const [token, tokenError] = useFetch(API_TOKEN_URL);
    const tokenError = null;

    return (
        <SettingsContext.Provider value={[settings, token, tokenError, categories, categoriesError]}>
            <Outlet />
        </SettingsContext.Provider>
    );
}

export { App, SettingsContext };





// const auth = useRef({
//     authenticated: false,
//     username: "",
//     userId: "",
// });

// const payload = useLoaderData();
// if (payload) {
//     const userinfo = payload.userinfo;
//     auth.current.userId = userinfo.id;
//     auth.current.username = userinfo.username;
//     auth.current.authenticated = true;
//     settings.current = payload.savedSettings
// }

// if (payload) {
//     const userinfo = payload.userinfo;
//     auth.userId = userinfo.id;
//     auth.username = userinfo.username;
//     //auth.authenticated = true;
//     auth.setAuthenticated(true);
//     settings.current = payload.savedSettings
// }
