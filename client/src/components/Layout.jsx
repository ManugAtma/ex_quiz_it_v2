import { Outlet } from "react-router-dom";
import { createContext, useRef, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";


// context to be used for authenticating user after login/logout or page refresh
const AuthContext = createContext();


/**
 * @component
 * A component defining the layout for the page.
 * Contains Header and Footer which are always displayed
 * as well as the main content between them.  
 * 
 * @returns {JSX.Element} - a div containing:
 * - The header. 
 * - The main content.
 * - The footer.
 */
function Layout() {

  const [authenticated, setAuthenticated] = useState(false);


  const auth = useRef({
    // authenticated: authenticated,
    // setAuthenticated: setAuthenticated,
    username: "",
    userId: "",
  });

  auth.current.authenticated = authenticated
  auth.current.setAuthenticated = setAuthenticated

  // const auth = useRef({
  //   authenticated: false,
  //   username: "",
  //   userId: "",
  // });

  return (
    <AuthContext.Provider value={auth.current}>
      <div className="min-vh-100 d-flex flex-column bg-light">
        <Header />
        <main className="container my-4 flex-grow-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export  {Layout, AuthContext};
