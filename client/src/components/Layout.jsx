import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * @component
 * A component defining the layout for the page.
 * Contains Header and Footer which are always displayed
 * as well as the mein content between them.  
 * 
 * @returns {JSX.Element} - a div containing:
 * - The header. 
 * - The main content.
 * - The footer.
 */
function Layout() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Header />
      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
