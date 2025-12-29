import calcCorrectAnswers from "@/pages/play/util/calcCorrectAnswers";

describe("calcCorrectAnswers", () => {

    test("happy path, count correctly answered questions", () => {

        const stats = [
            {
                answers: [
                    { correct: true, selected: true },
                    { correct: false },
                    { correct: false },
                    { correct: false }
                ]

            },
            {
                answers: [
                    { correct: true },
                    { correct: false, selected: true },
                    { correct: false },
                    { correct: false }
                ]
            }
        ]

        const result = calcCorrectAnswers(stats);

        expect(result).toBe(1);

        // check side effect: correctlyAnswered added
        expect(stats[0].correctlyAnswered).toBe(true);
        expect(stats[1].correctlyAnswered).toBeUndefined();
    });

    test("returns 0 for empty array", () => {
        expect(calcCorrectAnswers([])).toBe(0);
    })
})