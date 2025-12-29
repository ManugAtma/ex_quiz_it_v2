import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { StatsContext } from '@/pages/play/game/Game';
import GameCard from '@/pages/play/game/GameCard';
import { StatsMock } from '../StatsMock';

describe("GameCard", () => {

    test("display question text", () => {

        render(
            <StatsContext.Provider value={[StatsMock]}>
                <GameCard
                    showCategory={true}
                    clicked={false}
                    questionNum={0}
                />
            </StatsContext.Provider>
        );

        expect(screen.getByText(/During what war did the "Cuban Missile Crisis" occur/i));
    });

    test("display category text", () => {

        render(
            <StatsContext.Provider value={[StatsMock]}>
                <GameCard
                    showCategory={true}
                    clicked={false}
                    questionNum={0}
                />
            </StatsContext.Provider>
        );

        expect(screen.getByText(/History/i));
    });
});