import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { StatsContext } from '@/pages/play/game/Game';
import { GameCardWrapper } from '@/pages/play/game/GameCardWrapper';
import { StatsMock } from '../StatsMock';

describe("GameCardWrapper", () => {

    test("display question number", () => {

        render(
            <StatsContext.Provider value={[StatsMock]}>
                <GameCardWrapper
                    dispatch={() => { }}
                />
            </StatsContext.Provider>
        );

        expect(screen.getByText(/1\/2/i));
    });
});