import { useContext } from 'react';
import { Card } from 'react-bootstrap';

import decodeHTML from '@/pages/play/util/decodeHTML';

import Answers from "./Answers";
import { StatsContext } from './Game';

/**
 * @component
 * Displays everything related to an ongoing game: 
 * - header with category of the question
 * - question text
 * - answers
 * - footer with difficulty and number of current question 
 *   as well as total amount of questions. 
 * 
 * @param {boolean} showCategory - Defines if the category is displayed in the header (true) or not (false).
 * @param {Object} children - Children components.
 * @param {boolean} clicked - Indicates if the user has clicked an answer yet or if time is up (true) or not (false).
 * @param {function} setClicked - A function to set the value of clicked.
 * @param {number} questionNum - The index of a question in the stats object.
 *
 * @returns {React.ReactNode} - A Card displaying all game info.
 * 
 */
function GameCard({ showCategory, children, clicked, setClicked, questionNum }) {

    const [stats] = useContext(StatsContext);

    return (
        <Card className='border border-2 border-primary'>
            {
                showCategory
                    ? <Card.Header>
                        {decodeHTML(stats.current.questions[questionNum].category)}
                    </Card.Header>
                    : ""
            }
            <Card.Body className="p-0">
                <Card.Text className="p-3">
                    {
                        decodeHTML(stats.current.questions[questionNum].question)
                    }
                </Card.Text>
            </Card.Body>
            <Answers clicked={clicked} setClicked={setClicked} questionNum={questionNum} />
            {children}
        </Card>
    );
}

export default GameCard;