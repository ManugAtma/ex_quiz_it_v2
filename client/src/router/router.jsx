import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import { App } from '@/App';
import Layout from '@/components/Layout';
import Login from '@/pages/login/Login';
import ProtectedLayout from '@/components/ProtectedLayout';
import Welcome from '@/pages/welcome/Welcome';
import Stats from '@/pages/stats/Stats';
import About from '@/pages/about/About';
import Play from '@/pages/play/Play';
import Settings from '@/pages/settings/Settings';


export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <App />,
                loader: restore,
                hydrateFallbackElement: <Spinner />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/login" replace />
                    },

                    {
                        path: "login",
                        element: <Login />, // navigates to /user/:id if user is logged in
                    },

                    {
                        path: "about",
                        element: <About />
                    },

                    {
                        path: "user/:id",
                        element: <ProtectedLayout />,
                        children: [
                            {
                                index: true,
                                element: <Welcome />
                            },
                            {
                                path: "play",
                                element: <Play />
                            },
                            {
                                path: "settings",
                                element: <Settings />
                            },
                            {
                                path: "stats",
                                element: <Stats />
                            }
                        ]
                    }

                ]
            }
        ]
    }
]);


async function restore() {
    const res = await fetch("http://localhost:3000/me", { credentials: "include" });

    if (!res.ok) {
        console.log("session could not be restored");
        return null;
    }

    // to restore session
    const payload = await res.json();
    return payload;
}
