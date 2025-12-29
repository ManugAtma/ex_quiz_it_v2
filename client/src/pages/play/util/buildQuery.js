import { API_BASE_URL, API_QUERY_PARAM_TYPE } from "@/config";

/**
 * 
 * Builds the full API URL for fetching trivia questions for one game based on settings and token data.
 *
 * @param {{category:number, difficulty:string, amount: number}} - An object with the following props
 * - category: defining the category of the questions to be fetched.
 * - difficulty: difficulty level of the questions: easy, medium, hard, mixed.
 * @param {{token:string}} - An Object with a session token as prop.

 * @returns {string} - The full URL to fetch. 
 * 
 */

function buildQuery(settings, tokenData) {

    let category = settings.category ? `&category=${settings.category}` : "";
    let difficulty = settings.difficulty ? `&difficulty=${settings.difficulty}` : "";
    let token = `&token=${tokenData.token}`;

    return `${API_BASE_URL}amount=${settings.amount}${category}${difficulty}${API_QUERY_PARAM_TYPE}${token}`;
}

export default buildQuery;