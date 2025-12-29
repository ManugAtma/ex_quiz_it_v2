import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Play from '@/pages/play/Play';

describe("Play", () => {

    test("display PreGameScreen initially", () => {

        render(
            <MemoryRouter>
                <Play />
            </MemoryRouter>
        );
        const btn = screen.getByRole("button", { name: /play/i });

        expect(btn).toBeInTheDocument();
    });
});