import { Button, Card, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

/**
 * @component
 * 
 * The home screen of the app. It is displayed before starting a game. 
 * Shows a welcome message, a play button, and a link to settings.
 * 
 * @param {function} setPlaying - Sets the boolean variable playing.

 * @returns {JSX.Element} The rendered container and card composing the pre-game screen.
 * 
 */
function PreGameScreen({ setPlaying }) {
    return (
        <>
            <Container className='d-flex justify-content-center align-items-center mt-2 mb-2'>
                <h2 className='borsok-font'>Welcome to
                    <span className="text-warning"> Ex</span>
                    <span className="text-success">Quiz</span>
                    <span className="text-danger">It </span>
                    </h2>
                    <FontAwesomeIcon icon={faFaceGrinHearts} size="2x" className={`text-success fa-fw mb-3`} style={{ marginLeft: "0.1em" }}/>
            </Container>


            <Card className="border border-3 border-primary">
                <Card.Body >
                    <Card.Text>
                        Press play to start a new game. Go to settings to adjust games to your preferences.                    </Card.Text>
                    <Button onClick={() => setPlaying(true)} variant="primary" data-testid="play-btn">play</Button>
                    <Button as={NavLink} to="/settings" className="ms-2">settings</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default PreGameScreen;