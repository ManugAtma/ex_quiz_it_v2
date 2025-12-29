import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { Game } from '@/pages/play/game/Game';
import { SettingsContext } from '@/App';

import useFetch from '@/util/useFetch';

jest.mock('@/util/useFetch', () => ({
    __esModule: true,
    default: jest.fn(),
}));


describe("Game", () => {

    test("display timer", () => {

        const settings = {
            current: {
                amount: 10,
                category: "",
                difficulty: ""
            }
        };


        const test = { "response_code": 0, "results": [{ "type": "multiple", "difficulty": "medium", "category": "History", "question": "During what war did the &quot;Cuban Missile Crisis&quot; occur?", "correct_answer": "Cold War", "incorrect_answers": ["World War I", "World War II", "Revolutionary War"] }, { "type": "multiple", "difficulty": "medium", "category": "Celebrities", "question": "Which TV chef wrote an autobiography titled &quot;Humble Pie&quot;?", "correct_answer": "Gordon Ramsay", "incorrect_answers": ["Jamie Oliver", "Ainsley Harriott", "Antony Worrall Thompson"] }] };
        useFetch.mockReturnValue([test, "", () => { }]);

        render(
            <SettingsContext.Provider value={[settings, "x", ""]}>
                <MemoryRouter>
                    <Game />
                </MemoryRouter>
            </SettingsContext.Provider>

        );

        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });
});