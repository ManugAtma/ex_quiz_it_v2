import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import PreGameScreen from '@/pages/play/pre-game/PreGameScreen';

describe("PreGameScreen", () => {

    test("call setPlaying on click on play", () => {

        const setPlayingMock = jest.fn()
        render(
            <BrowserRouter>
                <PreGameScreen setPlaying={setPlayingMock} />
            </BrowserRouter>
        );

        const playBtn = screen.getByTestId("play-btn");
        fireEvent.click(playBtn);

        expect(setPlayingMock).toHaveBeenCalledWith(true);
    });
});