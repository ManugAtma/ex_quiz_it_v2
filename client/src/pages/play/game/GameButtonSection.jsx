import { Container, Button } from "react-bootstrap";


/**
 * @component
 * A box that is either empty or display a button to controll game state.
 * That is either a next button to show the next question or when the last
 * questions was ansered a finish button to finish the game. 
 *
 * @param {number} questionNum - The index of a question in the stats object.
 * @param {number} numOfQuestions - The total amount of questions of the current game.
 * @param {function} dispatch - A function to control game state, i.e. finish or a start an ew game.
 * @param {function} nextQuestion - A function that triggers the display of the next question.
 * @param {boolean} clicked - Indicates if the user has clicked an answer yet or if time is up (true) or not (false).
 * 
 * @returns {JSX.Element} - A Container, either empty or containnig one Button.
 * 
 */
function GameButtonSection({ questionNum, numOfQuestions, dispatch, nextQuestion, clicked }) {
    return (
        <Container
            id="next-section"
            className=" text-center d-flex justify-content-center align-items-start p-1"
            style={{ minHeight: '4em' }}
        >
            {
                function () {
                    if (clicked && questionNum < numOfQuestions - 1) {
                        return (
                            <Button
                                onClick={nextQuestion}
                                variant="success"
                                data-testid="next-btn"
                            >
                                next
                            </Button>);
                    }

                    if (clicked && !(questionNum < numOfQuestions - 1)) {
                        return (
                            <Button
                                onClick={() => dispatch({ type: "FINISH" })}
                                variant="primary"
                                data-testid="finish-btn"
                            >
                                finish
                            </Button>);
                    }

                    return "";
                }()
            }
        </Container>
    );
}

export default GameButtonSection;