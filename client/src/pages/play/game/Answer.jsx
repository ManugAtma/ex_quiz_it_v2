import { Col, Stack } from "react-bootstrap";

import decodeHTML from "@/pages/play/util/decodeHTML";

import AnswerIcon from "./AnswerIcon";

/**
 * @component
 * Displays one of four answers to a single question.
 * 
 * @param {{correct:boolean}} answer - A nested object of the stats object 
 * representing a single answer with at least the specified props. 
 * @param {number} i - The index of the answer (four answers per questions).
 * @param {boolean} clicked - Indicates if the user has clicked an answer yet or if time is up (true) or not (false).
 * @param {function} setClicked - A function to set the value of clicked.
 * @param {number} questionNum - The index of a question in the stats object.
 *
 * @returns {JSX.Element} - A Col containing one answer.
 * 
 */

function Answer({ answer, i, clicked, setClicked, questionNum }) {

    let borders = addBorders(i);

    let clickable = "clickable";
    let bgColor = "bg-primary";
    if (clicked) {
        clickable = "";
        if (answer.correct) bgColor = "correct-answer"
        else if (answer.selected) bgColor = "incorrect-answer";
    }

    function addBorders(i) {
        switch (i) {
            case 0:
                return "border-bottom border-end";
            case 1:
                return "border-bottom";
            case 2:
                return "border-end";
            default:
                return "";
        }
    }

    function handleClick(answer, i) {
        if (!clicked) {
            answer.selected = true;
            setClicked(true);
        }
    }


    return (
        <Col xs={6}
            key={i}
            className={`${borders} ${bgColor} ${clickable} d-flex align-items-center justify-content-center`}
            onClick={() => handleClick(answer, i)}
            style={{ minHeight: 6 + 'em' }}
            data-testid={answer.correct ? "correct-answer" : ""}
        >
            <Stack className="h-100 justify-content-between">
                <div className="answer-top-bottom">

                    {
                        clicked
                            ? <AnswerIcon
                                selected={answer.selected}
                                correct={answer.correct}
                                questionNum={questionNum}
                            />
                            : ""
                    }
                </div>
                <div> {decodeHTML(answer.text)}</div>
                <div className="answer-top-bottom"></div>
            </Stack>
        </Col>
    );
}

export default Answer;