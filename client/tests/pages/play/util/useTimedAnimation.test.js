import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react';

import useTimedAnimation from '@/pages/play/util/useTimedAnimation';

describe("useTimedAnimation", () => {

    function TestWrapper() {
        const [animation] = useTimedAnimation(500);
        return (
            <div data-testid="animation-test">
                {animation ? "ongoing" : "stopped"}
            </div>
        );
    }

    test("let animation run out in time", () => {

        jest.useFakeTimers();

        render(<TestWrapper />);
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        const text = screen.getByText("stopped");

        expect(text).toBeInTheDocument();
    });
});