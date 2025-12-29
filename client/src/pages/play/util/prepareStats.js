import { buildAnswers } from "./buildAnswers";

/**
 * 
 * Creates a game stats object from data passed to it (originally fetched from the api). 
 * The object contains info about the questions of the current game.
 *
 * @param {{
 *  results: {
 *      question: string,
 *      category: string,
 *      difficulty: string
 *  }[]
 * }} - An Object that contains at least the specified props.
 *
 * @returns {{ 
 *  questions: {
 *      question: string,
 *      category: string,
 *      difficulty: string,
 *      answers: Array<Object>
 *  }[] 
 * }} - An object of the specified type containing game stats.
 * 
 */
function prepareStats(data) {
    const stats = { questions: [] };
    for (let i = 0; i < data.results.length; i++) {
        stats.questions[i] = {
            question: data.results[i].question,
            category: data.results[i].category,
            difficulty: data.results[i].difficulty,
            answers: buildAnswers(data.results[i])
        };
    }
    return stats;
}

export default prepareStats;