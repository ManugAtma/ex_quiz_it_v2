import { useContext } from 'react';

import useTimedAnimation from '@/pages/play/util/useTimedAnimation';
import FaSquaredHourglass from '@/pages/play/components/FaSquaredHourglass';

import { StatsContext } from './Game';


/**
 * @component
 * An icon indicating to the user that the time is up. 
 * Displayed in the top right corner of the correct answer to a question.
 *
 * @param {boolean} correct - True: answer is correct, false: answer is incorrect.
 * @param {boolean} selected - True: answer was selected by the user, false: answer was not selected by the user.
 * @param {number} questionNum - The index of a question in the stats object.
 *
 * @returns {JSX.Element} - A FaSquaredHourglass icon.
 * 
 */
function AnswerIcon({ correct, selected, questionNum }) {

    const [stats] = useContext(StatsContext);
    const [animation] = useTimedAnimation(2500);

    if (correct && !selected && stats.current.questions[questionNum].timeout) {
        return (
            <FaSquaredHourglass
                size="2x"
                colorGlass={"light"}
                colorSquare={"danger"}
                classProps="mt-1 me-1"
            />
        );
    }
}

export default AnswerIcon;