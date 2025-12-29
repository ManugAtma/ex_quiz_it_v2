import { useContext } from "react";
import { StatsContext } from "../game/Game";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquareXmark, faHourglass } from '@fortawesome/free-solid-svg-icons';
import FaSquaredHourglass from "../components/FaSquaredHourglass";


/**
 * @component
 * An icon that reflects how and if a question was answered.
 * There are three options: 
 * - correctly answered (green checkmark)
 * - incorrectly answered (red cross)
 * - timeout, i.e. not answered in time (red hourglass) 
 *
 * @param {number} i - The index of a question in the stats object.
 *
 * @returns {React.ReactNode} - A FontawesomeIcon (checkmark or cross icon) 
 * or the custom FaSquaredHourglass (hourglass icon).
 * 
 */
function SummaryIcon({ i }) {

    const [stats] = useContext(StatsContext);
    let icon, color;
    let size = "3x";
    if (stats.current.questions[i].correctlyAnswered) {
        icon = faSquareCheck;
        color = "success";
    } else {
        color = "danger";
        if (stats.current.questions[i].timeout) {
            return (
                <FaSquaredHourglass
                    size="3x"
                    colorGlass={"light"}
                    colorSquare={"danger"}
                />
            );
        } else {
            icon = faSquareXmark;
        }
    }

    return (
        <FontAwesomeIcon
            icon={icon}
            size={size}
            className={`text-${color} fa-fw fa-icon-no-margin`}
        />
    );
}

export default SummaryIcon;