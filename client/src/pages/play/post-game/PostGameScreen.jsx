import { StatsContext } from "../game/Game";
import { useContext, useRef } from "react";
import VerdictBox from "./VerdictBox";
import SummaryBox from "./SummaryBox";
import calcCorrectAnswers from "../util/calcCorrectAnswers";


/**
 * @component
 * The screen displayed when the game is finished.
 * Displays a verdict for the finished game and a game summary with details 
 * of single questions. Provides options to restart or go to settings.
 *
 * @param {function} setStats - A funtion to (re)set the stats object.
 * @param {function} dispatch - A function to control game state, i.e. finish or a start an ew game.
 *
 * @returns {React.ReactNode} - A VerdictBox evaluating the users game performance 
 * and a SummaryBox providing details for single questions. 
 * 
 */
function PostGameScreen({ setStats, dispatch }) {

    const [stats] = useContext(StatsContext);
    const correctAnswers = useRef(calcCorrectAnswers(stats.current.questions));
    stats.current.correctAnswers = correctAnswers.current;

    return (
        <>
            <VerdictBox dispatch={dispatch} setStats={setStats} />
            <SummaryBox />
        </>
    )
}

export default PostGameScreen;