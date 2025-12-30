import { createBrowserRouter, Navigate } from 'react-router-dom';

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
                index: true,
                element: <Navigate to="/login" replace />
            },

            {
                path: "login",
                element: <Login />,
                loader: ()=>{}
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
]);
