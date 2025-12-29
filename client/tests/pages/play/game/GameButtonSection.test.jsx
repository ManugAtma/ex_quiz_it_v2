import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GameButtonSection from '@/pages/play/game/GameButtonSection';


describe("GameButtonSection", () => {

    test("display next Button", () => {
        render(
            <GameButtonSection
                questionNum={0}
                numOfQuestions={2}
                dispatch={(x) => x}
                nextQuestion={() => { }}
                clicked={true}
            />
        );

        expect(screen.getByTestId("next-btn")).toBeInTheDocument();
    });

    test("display finish Button", () => {
        render(
            <GameButtonSection
                questionNum={1}
                numOfQuestions={2}
                dispatch={(x) => x}
                nextQuestion={() => { }}
                clicked={true}
            />
        );

        expect(screen.getByTestId("finish-btn")).toBeInTheDocument();
    });
});