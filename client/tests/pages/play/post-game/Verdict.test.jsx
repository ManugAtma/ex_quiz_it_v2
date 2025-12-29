import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

import { StatsContext } from '@/pages/play/game/Game';
import Verdict from '@/pages/play/post-game/Verdict';


describe("Verdict", () => {

    test("display verdict text", () => {

        const statsMock = {
            current: {
                correctAnswers: 2,
                questions: ["a", "b"]
            }
        }
        render(
            <StatsContext.Provider value={[statsMock]}>
                <Verdict
                    verdict={"Perfect"}
                    icon={faFaceGrinHearts}
                    color={"success"}
                />
            </StatsContext.Provider>
        );

        expect(screen.getByText(/perfect/i));
    });
});