/**
 * @component
 * The content of a footer of a game card displaying difficulty 
 * and number of current question as well as total amount of questions.
 *
 * @param {string} difficulty - The difficulty of the current question.
 * @param {Object} children - Children components.
 *
 * @returns {React.ReactNode} - A div containing content for the game card footer.
 * 
 */

function GameCardFooter({ difficulty, children }) {

    let capitalized = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

    return (
        <div className="d-flex w-100">
            <div className="d-flex align-items-center">{capitalized}</div>
            <div className="flex-grow-1 d-flex justify-content-end ">
                {children}
            </div>
        </div>
    );

}

export default GameCardFooter;