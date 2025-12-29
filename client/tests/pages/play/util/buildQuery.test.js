import buildQuery from '@/pages/play/util/buildQuery';

describe("builQuery", () => {

    test("return correct url", () => {
        const settingsMock = {
            category: "21",
            amount: "10",
            difficulty: "easy"
        };
        const tokenDataMock = {token: "x"};

        const expected = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple&token=x";
        const query = buildQuery(settingsMock, tokenDataMock);

        expect(query).toBe(expected);
    });
});
