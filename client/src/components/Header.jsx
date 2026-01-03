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
            {/* <Button onClick={()=>console.log(auth.authenticated)}> auth</Button> */}
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/login">
                    <div className="bg-secondary border border-3 border-primary rounded-4 pt-2 ps-2 pe-2">
                        <h1 className="borsok-font fs-1 pt-2">
                            <span className="text-warning">Ex</span>
                            <span className="text-success">Quiz</span>
                            <span className="text-danger">It</span>
                        </h1>
                    </div>
                </Navbar.Brand>

                {/* right: Small screen only (icon + toggler) */}
                <div className="d-flex align-items-center ms-auto m d-lg-none">
                    {auth.authenticated && <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        size="2x"
                        className="text-light me-1 clickable"
                        onClick={()=> logout(auth, navigate)}
                    />}
                    {/* gitHub icon (left of toggler) */}
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="me-3">
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="2x"
                            className="text-light mt-1"
                        />
                    </a>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="border border-4 text-light"
                    />
                </div>

                {/* Collapsed nav for small, inline nav for large */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {auth.authenticated
                            && (
                            <>
                                <Nav.Link className="text-light" as={NavLink} to={`/user/${auth.userId}/play`}>Play</Nav.Link>
                                <Nav.Link className="text-light" as={NavLink} to={`/user/${auth.userId}/settings`}>Settings</Nav.Link>
                            </>)
                        }

                        <Nav.Link className="text-light" as={NavLink} to="about">About</Nav.Link>

                    </Nav>

                    {/* gitHub icon for large screens only */}
                    <div className="d-flex d-lg-block ms-auto me-2">
                        {auth.authenticated && <FontAwesomeIcon
                            icon={faArrowRightFromBracket}
                            size="2x"
                            className="text-light mt-4 me-2 clickable"
                            onClick={()=> logout(setAuth, navigate)}
                        />}
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2x"
                                className="text-light"
                            />
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;