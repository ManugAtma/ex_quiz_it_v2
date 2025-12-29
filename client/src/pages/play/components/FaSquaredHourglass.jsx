import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import useTimedAnimation from "@/pages/play/util/useTimedAnimation";

/**
 * @component
 * 
 * An icon showing an hourglass in a square. 
 * Created by layering two fontawesome icons, hourglass and square.
 * 
 * @param {string} size - The size of the icon using the utility classes of fontawesome, e.g. x, xl or 2x.
 * @param {string} colorGlass - Color of the hourglass using bootstraps utility classes for color, e.g. primary or danger.
 * @param {string} colorSquare -Color of the square using bootstraps utility classes for color, e.g. primary or danger.
 * @param {number} timeout - The duration after which the beat animation stops.
 * @param {string} classProps - The classes to be passed on to the surounding div. 
 * 
 * @returns {JSX.Element} - A div containg the layered icons. 
 * 
 */
function FaSquaredHourglass({
    size = "1x",
    colorGlass,
    colorSquare,
    timeout = 0,
    classProps
}) {

    const [animation] = useTimedAnimation(timeout);

    return (
        <div
            className={`${classProps} fa-${size} fa-layers fa-fw fa-icon-no-margin`}
        >
            <FontAwesomeIcon
                icon={faSquare}
                transform="shrink-0"
                className={`text-${colorSquare}`}
                beat={animation}
            />

            <FontAwesomeIcon
                icon={faHourglass}
                transform="shrink-7"
                className={`text-${colorGlass}`}
                beat={animation}
            />
        </div>
    );
}

export default FaSquaredHourglass;