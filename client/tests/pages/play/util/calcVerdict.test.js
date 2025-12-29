import calcVerdict from '@/pages/play/util/calcVerdict';

describe("calcVerdict", () => {

    test("return text for all answered correctly", () => {

        const [text, icon, color] = calcVerdict(10, 10);

        expect(text).toBe("Perfect!");
    });

    test("return color for all answered correctly", () => {

        const [, , color] = calcVerdict(10, 10);

        expect(color).toBe("success");
    });

    test("return text for 50% answered correctly", () => {

        const [text, icon, color] = calcVerdict(10, 5);

        expect(text).toBe("Not too bad!");
    });

    test("return color for 50% answered correctly", () => {

        const [, , color] = calcVerdict(10, 5);

        expect(color).toBe("warning");
    });

    test("throw err because correct > total", () => {
        expect(() => calcVerdict(10, 15)).toThrow("correct cannot be greater than total");
    });
});
