import { useState, useRef, useContext, createContext } from 'react';
import { Card } from "react-bootstrap";
import { StatsContext } from './Game';
import GameCard from './GameCard';
import Timer from './Timer';
import GameButtonSection from './GameButtonSection';
import GameCardFooter from './GameCardFooter';

const GameContext = createContext();

/**
 * @component
 * A wrapper for a game card providing context and children to the GameCard component.
 * The children of GameCard are: 
 * - Timer: shows the time left to answer a question
 * - GameButtonSection: Buttons to control game state
 * - Footer: displaying additional info about question.
 *
 * @param {function} dispatch - A function to control game state, i.e. finish or a start a new game.
 *
 * @returns {React.ReactNode} - A Context.Provider containing the GameCard and its children.
 * 
 */
function GameCardWrapper({ dispatch }) {

    const [clicked, setClicked] = useState(false);
    const [questionNum, setQuestionNum] = useState(0);
    const [stats] = useContext(StatsContext);
    const numOfQuestions = useRef(stats.current.questions.length);
    // for Timer. 100 ≙ full progress bar
    const [remaining, setRemaining] = useState(100);


    function nextQuestion() {
        setClicked(false);
        setQuestionNum(questionNum + 1);
        setRemaining(100);
    }

    return (
        <GameContext.Provider value={[questionNum]}>
            <GameCard
                showCategory={true}
                clicked={clicked}
                setClicked={setClicked}
                questionNum={questionNum}
            >

                <Timer
                    timeout={15000}
                    delay={16}
                    setClicked={setClicked}
                    clicked={clicked}
                    remaining={remaining}
                    setRemaining={setRemaining}
                    questionNum={questionNum}
                />

                <GameButtonSection
                    questionNum={questionNum}
                    numOfQuestions={numOfQuestions.current}
                    dispatch={dispatch}
                    nextQuestion={nextQuestion}
                    clicked={clicked}
                />

                <Card.Footer>
                    <GameCardFooter
                        questionNum={questionNum + 1}
                        numOfQuestions={numOfQuestions}
                        difficulty={stats.current.questions[questionNum].difficulty}
                    >
                        <div className="flex-grow-1 d-flex justify-content-end ">
                            {`${questionNum + 1}/${numOfQuestions.current}`}
                        </div>
                    </GameCardFooter>
                </Card.Footer>
            </GameCard>
        </GameContext.Provider>
    );
}

export { GameCardWrapper, GameContext };