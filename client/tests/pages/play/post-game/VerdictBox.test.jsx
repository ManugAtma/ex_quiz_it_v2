import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { StatsContext } from '@/pages/play/game/Game';
import VerdictBox from '@/pages/play/post-game/VerdictBox';

import { StatsMock } from '../StatsMock';

describe("VerdictBox", () => {

    test("display correct verdict ", () => {
        render(
            <BrowserRouter>
                <StatsContext.Provider value={[StatsMock]}>
                    <VerdictBox />
                </StatsContext.Provider>
            </BrowserRouter>
        );

        const verdictText = screen.getByText(/You got 1 of 2 right/i);
        expect(verdictText).toBeInTheDocument();
    });
});