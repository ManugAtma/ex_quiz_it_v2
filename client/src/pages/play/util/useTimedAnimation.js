import { useEffect, useState } from "react";

/**
 * 
 * Makes a animation stop after a specified timeout.
 * Does so by returning a reactive variable that is initially set
 * to true and then set to false after the specified duration (timeout).
 *
 * @param {number} timeout - The duration after which the animation is stopped.
 *
 * @returns {boolean} - A variable defining if the animation is currently ongoing (true) or not (false).
 * 
 */

function useTimedAnimation(timeout) {
    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimation(false);
        }, timeout);
    }, []);
    
    return [animation, setAnimation];
}

export default useTimedAnimation;