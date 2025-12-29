import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Header from '@/components/Header';


describe("header", () => {

    test("display logo text", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        const logo = screen.getByText(/quiz/i);
        expect(logo).toBeInTheDocument();
    });
});