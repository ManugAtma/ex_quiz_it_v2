import {_merge} from "@/pages/play/util/buildAnswers";

describe("_merge",()=>{

    test("returns answers with the correct text values", ()=>{

        const answers = {
            correct_answer: "correct",
            incorrect_answers: ["a", "b", "c"]
        }

        const result = _merge(answers);

        expect(result[0].text).toBe("correct");
    });

     test("returns answers with the correct values for correct prop", ()=>{

        const answers = {
            correct_answer: "correct",
            incorrect_answers: ["a", "b", "c"]
        }

        const result = _merge(answers);

        expect(result[0].correct).toBe(true);
    });
})