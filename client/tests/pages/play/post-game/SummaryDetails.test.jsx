import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { StatsContext } from '@/pages/play/game/Game';
import SummaryDetails from '@/pages/play/post-game/SummaryDetails';

import { StatsMock } from '../StatsMock';


describe("SummaryDetails", () => {

    const currentStat = StatsMock.current.questions[0];

    test("display non selected answers in modal", () => {
        render(
            <StatsContext.Provider value={[StatsMock]}>
                <SummaryDetails
                    currentStat={currentStat}
                    questionNum={0}
                />
            </StatsContext.Provider>
        );

        const detailsBtn = screen.getByTestId("details-btn");
        fireEvent.click(detailsBtn);
        const answer = screen.getByText(/Cold War/i);

        expect(answer).toBeInTheDocument();
    });
});
