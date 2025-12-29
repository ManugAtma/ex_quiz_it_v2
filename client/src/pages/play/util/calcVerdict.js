import { faFaceGrinHearts, faFaceGrinStars, faFaceSmileBeam, faFaceMeh, faFaceFrown } from '@fortawesome/free-solid-svg-icons';


/**
 * 
 * Calculates the appropriate verdict based on how many question were answered correctly.
 *
 * @param {number} total - The total amount of question in the current game.
 * @param {number} correct - The amount of correctly answered questions
 * @param 
 *
 * @returns {[:string, :Object, :string]} - An Array containing the verdict consisting of:
 * - A verbal verdict (string).
 * - An icon (Object).
 * - A color for the icon (string) using bootstraps utility classes for colors, e.g. danger, success. 
 * 
 */
function calcVerdict(total, correct) {

    if(correct > total) {
        throw new Error("correct cannot be greater than total")
    }

    if (total == correct) {
        return ["Perfect!", faFaceGrinHearts, "success"];
    }

    if (correct >= (total * 0.8)) {
        return ["Well done!", faFaceGrinStars, "success"];
    }

    if (correct >= (total * 0.5)) {
        return ["Not too bad!", faFaceSmileBeam, "warning"];
    }

    if (correct >= (total * 0.3)) {
        return ["Still ok!", faFaceMeh, "warning"];
    }
    if (correct < (total * 0.3)) {
        return ["Next time!", faFaceFrown, "danger"];
    }
}

export default calcVerdict;