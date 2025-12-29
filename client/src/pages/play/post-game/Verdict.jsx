import { StatsContext } from "../game/Game";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useTimedAnimation from "@/pages/play/util/useTimedAnimation";

/**
 * @component
 * Displays a verdict, i.e. evaluation of a finished game.  
 * Displays the amount of total and correctly answered questions
 * as well as a text and icon based on that (the actual verdict).
 *
 * @param {[
 *  verdict: string, 
 *  icon: Object, 
 *  color: string
 * ]} - An array containing:
 * - verdict: The actual verdict of the game as text.
 * - icon: the icon corresponding to the verdict.
 * - color: the color corresponding to the verdict. use bootstraps utility classes for color like dange, warning etc.
 *
 * @returns {React.ReactNode} - A div containing the Verdict with text and icon.
 * 
 */
function Verdict({ verdict, icon, color }) {

    const [stats] = useContext(StatsContext);
    const [animation] = useTimedAnimation(2000);


    return (
        <>
            <div className=" d-flex justify-content">
                <FontAwesomeIcon
                    icon={icon} size="2x"
                    beat={animation}
                    className={`text-${color} me-2 fa-icon-no-margin`}
                />
                <h3>{verdict}</h3>
            </div>

            <p>You got {stats.current.correctAnswers} of {stats.current.questions.length} right.</p>
        </>
    );
}

export default Verdict;