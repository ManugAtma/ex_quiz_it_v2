import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import LoadingHandler from '@/components/LoadingHandler';

describe("Loading Handler", () => {

    test("display spinner while data is empty", () => {
        render(<LoadingHandler data={""} error={""} />);
        const spinner = screen.getByRole("status");
        expect(spinner).toBeInTheDocument();
    });

    test("display error in case of error", () => {
        render(<LoadingHandler data={""} error={"429"} />);
        const error = screen.getByText(/429/);
        expect(error).toBeInTheDocument();
    });

    test("display chidren when data is not empty", () => {
        const data = "data";
        render(
            <LoadingHandler data={data} error={""}>
                <p>{data}</p>
            </LoadingHandler>
        );
    });

});