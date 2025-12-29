import { Container, Card } from "react-bootstrap";
import { useContext } from "react";
import { StatsContext } from "../game/Game";
import decodeHTML from "../util/decodeHTML";
import SummaryResult from "./SummaryResult";



/**
 * @component
 * Displays a game summary by listing all questions 
 * and providing additional info about them, e.g. if answered correctly.
 *
 * @returns {React.ReactNode} - A Container containing the list of questions.
 * 
 */
function SummaryBox() {

    const [stats] = useContext(StatsContext);

    return (
        <Container className="mt-4">
            <h2>Summary</h2>
            {
                stats.current.questions.map((item, i) => {
                    return (

                        <Card key={i} className="mt-2 border border-3 border-primary">
                            <Card.Body>
                                <p >{`${i + 1}. ${decodeHTML(item.question)}`}</p>
                                <SummaryResult i={i} />
                            </Card.Body>
                        </Card>
                    );
                })
            }
        </Container>
    );
}

export default SummaryBox;