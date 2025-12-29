/**
 * 
 * Prepares answers for display by
 * merging one correct and three incorrect answers into a single array  
 * and shuffling them randomly. 
 *
 * @param {{correct_answer: string, incorrect_answers: Array<String>}} result - An object of the specified type.  
 * 
 * @returns {Array<Object>} - An Array containg object with the props:
 * - text (string): The actual answer to a trivia question.
 * - correct (boolean): Indicates if the answer is correct or incorrect.
 * 
 */
function buildAnswers(result) {
    let answers = _merge(result);
    let shuffled = _shuffle(answers);
    return shuffled;
}


// extract deterministic behavior (merge) for testability


/**
 * @private
 * Merges the correct answer and incorrect answers into a single array.
 * Does not shuffle; deterministic order for testing.
 *
 * @param {{correct_answer: string, incorrect_answers: string[]}} result - Trivia question object
 * @returns {{text: string, correct: boolean}[]} Array of answer objects
 */
function _merge(result) {
    let incorrectAns = result.incorrect_answers;
    let answers = [
        { text: result.correct_answer, correct: true },
        { text: incorrectAns[0], correct: false },
        { text: incorrectAns[1], correct: false },
        { text: incorrectAns[2], correct: false },
    ]
    return answers;
}


/**
 * @private
 * Shuffles the first element of the answers array with a random element.
 * This introduces randomness to the order of answers.
 *
 * @param {{text: string, correct: boolean}[]} answers - Array of answer objects
 * @returns {{text: string, correct: boolean}[]} Shuffled array of answer objects
 */
function _shuffle(answers) {
    let random = Math.floor(Math.random() * answers.length);
    let tmp = answers[random];
    answers[random] = answers[0];
    answers[0] = tmp;
    return answers;
}

export { buildAnswers, _merge };