import prepareStats from '@/pages/play/util/prepareStats';


describe("prepareStats", () => {

    test("return correct stats", () => {
        const testData = { "response_code": 0, "results": [{ "type": "multiple", "difficulty": "medium", "category": "History", "question": "During what war did the &quot;Cuban Missile Crisis&quot; occur?", "correct_answer": "Cold War", "incorrect_answers": ["World War I", "World War II", "Revolutionary War"] }, { "type": "multiple", "difficulty": "medium", "category": "Celebrities", "question": "Which TV chef wrote an autobiography titled &quot;Humble Pie&quot;?", "correct_answer": "Gordon Ramsay", "incorrect_answers": ["Jamie Oliver", "Ainsley Harriott", "Antony Worrall Thompson"] }] };
        
        const stats = prepareStats(testData);

        expect(stats.questions[0].category).toBe("History");
    });
});