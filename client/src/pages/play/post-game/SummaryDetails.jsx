import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import Answers from "../game/Answers";
import decodeHTML from '../util/decodeHTML';
import GameCardFooter from '../game/GameCardFooter';

/**
 * @component
 * Provides details about a single question of a finished game.
 * Consists of a details button that on click displays a modal. 
 * The modal provides additional infos about a question
 * like available answers, correct answer, question category.
 *
 * @param {{
 *  category:string, 
 *  question:string, 
 *  difficulty:string,
 *  answers: Array<Object>
 * }} - An nested object of the stats object representing a question and info related to it.
 * @param {number} questionNum - The index of the question in the stats object.
 *
 * @returns {React.ReactNode} - A "Details" Button and a Modal that is shown on click.
 * 
 */

function SummaryDetails({ currentStat, questionNum }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button
                variant="primary"
                onClick={handleShow}
                data-testid="details-btn"
            >
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={"fs-6"}>{decodeHTML(currentStat.category)}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <Container className={"p-3 fs-5"}>
                        {decodeHTML(currentStat.question)}
                    </Container>
                    <Answers
                        answers={currentStat.answers}
                        clicked={true}
                        questionNum={questionNum}
                    />
                    <div style={{ minHeight: '2.5em' }}></div>
                </Modal.Body>
                <Modal.Footer className="justify-content-start">
                    <GameCardFooter difficulty={currentStat.difficulty}>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </GameCardFooter>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SummaryDetails;