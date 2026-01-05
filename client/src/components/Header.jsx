import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import logout from '@/services/logout';
import { GITHUB_URL } from '@/config';

import { AuthContext } from './Layout';


/**
 * @component
 * A responsive header that is always displayed. 
 * Contains the logo, a link to the code of this project on Github and 
 * links to the pages of this website. 
 * For a small screen the display of these links is 
 * controlled via a Toggler.
 * 
 * @returns {JSX.Element} - A header containing 
 * - The logo of the website (top left).
 * - Links to the pages: play, settings, about.
 * - Link to the code on github.
 * - A toggler for small screens (i.e. smaller than bootstrap's lg). 
 */
function Header() {
    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="bg-info navbar-dark borsok-font">
            <Container fluid className="d-flex align-items-center">

                {/* Brand */}
                <Navbar.Brand as={NavLink} to="/login">
                    <div className="bg-secondary border border-3 border-primary rounded-4 pt-2 ps-2 pe-2">
                        <h1 className="borsok-font fs-1 pt-2">
                            <span className="text-warning">Ex</span>
                            <span className="text-success">Quiz</span>
                            <span className="text-danger">It</span>
                        </h1>
                    </div>
                </Navbar.Brand>



                {/* Right icons – ALWAYS visible */}
                <div className="d-flex align-items-center ms-auto order-lg-last">
                    <div className="mt-1 me-3">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2x"
                                className="text-light"
                            />
                        </a>
                    </div>
                    {auth.authenticated && (
                        <FontAwesomeIcon
                            icon={faArrowRightFromBracket}
                            size="2x"
                            className="text-light me-3 clickable"
                            onClick={() => logout(setAuth, navigate)}
                        />
                    )}
                    {/* Toggler (only controls nav links) */}
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="border border-4 text-light ms-auto d-lg-none"
                    />
                </div>



                {/* Collapsible nav links only */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mt-3 mt-lg-0">
                        {auth.authenticated && (
                            <>
                                <Nav.Link
                                    className="text-light"
                                    as={NavLink}
                                    to={`/user/${auth.userId}/play`}
                                >
                                    Play
                                </Nav.Link>
                                <Nav.Link
                                    className="text-light"
                                    as={NavLink}
                                    to={`/user/${auth.userId}/settings`}
                                >
                                    Settings
                                </Nav.Link>
                            </>
                        )}
                        <Nav.Link
                            className="text-light"
                            as={NavLink}
                            to="about"
                        >
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}



export default Header;