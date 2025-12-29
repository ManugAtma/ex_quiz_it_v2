import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { StatsContext } from '@/pages/play/game/Game';
import SummaryBox from '@/pages/play/post-game/SummaryBox';

import { StatsMock } from '../StatsMock';

describe("SummaryBox", () => {

    test("display selected answers", () => {

        render(
            <StatsContext.Provider value={[StatsMock]}>
                <SummaryBox />
            </StatsContext.Provider>
        );

        const answer1 = screen.getByText("Revolutionary War");
        expect(answer1).toBeInTheDocument();

    });
});