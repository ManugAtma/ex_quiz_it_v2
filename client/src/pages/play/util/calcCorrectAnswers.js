/**
 * 
 * Calculates the number of correctly answered questions. 
 * SIDE-EFFECT: adds correctlyAnswered prop and sets it to true 
 * if question was answered correctly.
 *
  * @param {{ 
 *   answers: { 
 *     correct: boolean, 
 *     selected: boolean 
 *   }[], 
 *   [key: string]: any 
 * }[]} stats - Array of question objects, each containing an array of answer objects.
 *
 * @returns {number} The total number of correctly answered questions.
 */

function calcCorrectAnswers(stats) {
    let correctAnswers = 0;
    for (let question of stats) {
        for (let answer of question.answers) {
            if (answer.correct && answer.selected) {
                correctAnswers++;
                question.correctlyAnswered = true;
            }
        }
    }
    return correctAnswers;
}

export default calcCorrectAnswers;