import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { StatsContext } from '@/pages/play/game/Game';
import SummaryResult from '@/pages/play/post-game/SummaryResult';

import { StatsMock } from '../StatsMock';

describe("SummaryResult", () => {

    test("display selected answer ", () => {
        render(
            <BrowserRouter>
                <StatsContext.Provider value={[StatsMock]}>
                    <SummaryResult i={0} />
                </StatsContext.Provider>
            </BrowserRouter>
        );

        const selectedAnswer = screen.getByText(/Revolutionary War/i);
        expect(selectedAnswer).toBeInTheDocument();
    });
});