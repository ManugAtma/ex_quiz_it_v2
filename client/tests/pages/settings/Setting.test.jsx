import { render, screen, fireEvent} from '@testing-library/react';

import Setting from '@/pages/settings/Setting';

describe("Setting", () => {

    test("call onChange fn when select value is changed", () => {
        const mockOnChange = jest.fn();
        render(
            <Setting
                value={""}
                onChange={mockOnChange}
                label={"test"}
            >
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </Setting>
        );
        const select = screen.getByRole('combobox')
        fireEvent.change(select, { target: { value: "2" } });

        expect(mockOnChange).toHaveBeenCalled();
    });
});