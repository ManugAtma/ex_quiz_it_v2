import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { StatsContext } from '@/pages/play/game/Game';
import Answers from '@/pages/play/game/Answers';
import { StatsMock } from '../StatsMock';

describe("Answers", () => {

    test("display answers", () => {

        render(
            <StatsContext.Provider value={[StatsMock]}>
                <Answers
                    clicked={false}
                    setClicked={() => { }}
                    questionNum={0}
                />
            </StatsContext.Provider>
        );

        expect(screen.getByText(/Cold War/i));
    });


    test("display answers", () => {

        render(
            <StatsContext.Provider value={[StatsMock]}>
                <Answers
                    clicked={true}
                    setClicked={() => { }}
                    questionNum={0}
                />
            </StatsContext.Provider>
        );

        const correctAns = screen.getByTestId(/correct-answer/i);
        expect(correctAns).toHaveClass('correct-answer');
    });
});