import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "@/components/Footer";

describe("Footer", () => {
    test("renders footer with copyright text", () => {
        render(<Footer />);
        expect(screen.getByText("© 2025 ExQuizIt")).toBeInTheDocument();
    });
});
