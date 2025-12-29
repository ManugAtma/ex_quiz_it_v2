import { useContext } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { StatsContext } from "@/pages/play/game/Game";
import calcVerdict from "@/pages/play/util/calcVerdict";

import Verdict from "./Verdict";

/**
 * @component
 * A wrapper for the verdict, i.e the evaluation of a finished game
 * that is displayed, and Buttons to go to settings or start a new game.
 * 
 * @param {function} setStats - A function to (re)set the stats object.
 * @param {function} dispatch - A function to control game state, i.e. finish or a start an ew game.
 *
 * @returns {React.ReactNode} - A Container containing the Verdict as well as 
 * the new game and settings Buttons.
 * 
 */
function VerdictBox({ dispatch, setStats }) {

    const [stats] = useContext(StatsContext);

    function startNewGame() {
        dispatch({ type: "NEW_GAME" });
        setStats(null);
        stats.current = "";
    }

    let [verdict, icon, color] = calcVerdict(stats.current.questions.length, stats.current.correctAnswers);


    return (
        <Container className="mt-4">
            <Card className={`border border-${color} border-3`}>
                <Card.Body>
                    <Verdict
                        verdict={verdict}
                        icon={icon}
                        color={color} 
                    />
                    <Button className="me-2" onClick={startNewGame}>new game</Button>
                    <Button as={NavLink} to="/settings">settings</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default VerdictBox;