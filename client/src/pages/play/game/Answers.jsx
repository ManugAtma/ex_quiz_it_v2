import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { StatsContext } from './Game';
import Answer from './Answer';

/**
 * @component
 * Displays all four possible answers to a single question to the user in 2 x 2 format.
 *
 * @param {boolean} clicked - Indicates if the user has clicked an answer yet or if time is up (true) or not (false).
 * @param {function} setClicked- A function to set the value of clicked.
 * @param {number} questionNum - The index of a question in the stats object.
 *
 * @returns {JSX.Element} - A Row (that is displayed as two rows)
 * containing answers to a quesiton.
 * 
 */

function Answers({ clicked, setClicked, questionNum }) {

    const [stats] = useContext(StatsContext);

    return (
        <Row className="g-0 text-center">
            {
                stats.current.questions[questionNum].answers.map(function (answer, i) {
                    return (
                        <Answer
                            answer={answer}
                            i={i}
                            clicked={clicked}
                            setClicked={setClicked}
                            key={i}
                            questionNum={questionNum}
                        />
                    );
                })
            }
        </Row>
    );
}

export default Answers;