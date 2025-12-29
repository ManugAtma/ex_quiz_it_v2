import { useState, act } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { StatsContext } from '@/pages/play/game/Game';
import Timer from '@/pages/play/game/Timer';


describe("Timer", () => {

    test("count down correct", () => {

        // create wrapper to provide state
        function TestWrapper() {
            const [remaining, setRemaining] = useState(100);
            return (
                <Timer
                    timeout={1000}
                    delay={100}
                    remaining={remaining}
                    setRemaining={setRemaining}
                    clicked={false}
                    setClicked={() => { }}
                />
            );
        }

        jest.useFakeTimers();
        render(
            <StatsContext.Provider value={[""]}>
                <TestWrapper />
            </StatsContext.Provider>
        );

        // multiple separate act calls to prevent batching of re-renders
        for (let i = 0; i < 5; i++) {
            act(() => {
                jest.advanceTimersByTime(100);
            });
        }

        const progressBar = screen.getByRole("progressbar");

        expect(progressBar).toHaveStyle(`width: 50%`);

    });
});