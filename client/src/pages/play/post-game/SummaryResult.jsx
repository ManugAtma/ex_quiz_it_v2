import { useContext } from "react";
import { Container } from "react-bootstrap";

import { StatsContext } from "@/pages/play/game/Game";

import SummaryDetails from "./SummaryDetails";
import SummaryIcon from "./SummaryIcon";

/**
 * @component
 * Displays the results of a single question of a finished game.
 * Consists of an icon, the answer given by the user or "timeout",
 * and a details button. 
 *
 * @param {number} i - The index of a question in the stats object.
 *
 * @returns {React.ReactNode} - A Container containing SummaryIcon, 
 * a div displaying the answer and SummaryDetails:
 * 
 */

function SummaryResult({ i }) {

    const [stats] = useContext(StatsContext);

    let answer;
    for (let item of stats.current.questions[i].answers) {
        if (item.selected) answer = item.text;
    }
    if (!answer) answer = "Timeout";

    return (
        <Container fluid className="px-0">
            <div className="d-flex align-items-center w-100">
                <div className="d-flex align-items-center">
                    <SummaryIcon i={i} />
                    <div className="ms-2 d-flex align-items-center">
                        <span>{answer}</span>
                    </div>
                </div>

                <div className="ms-auto">
                    <SummaryDetails questionNum={i} currentStat={stats.current.questions[i]} />
                </div>
            </div>
        </Container>
    );
}

export default SummaryResult;