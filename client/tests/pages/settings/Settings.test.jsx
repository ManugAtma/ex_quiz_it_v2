import { render, screen, fireEvent } from '@testing-library/react';
import Settings from '@/pages/settings/Settings';

import { SettingsContext } from '@/App';


describe("Settings", () => {

    const settings = {
        current: {
            amount: 10,
            category: "",
            difficulty: ""
        }
    };

    test("display heading when data is not empty", () => {

        const settings = {
            current: {
                amount: 10,
                category: "",
                difficulty: ""
            }
        };

        render(
            <SettingsContext.Provider value={[settings]}>
                <Settings data={"data"} />
            </SettingsContext.Provider>
        );
        const heading = screen.getByText(/settings/i);
    });

    test("update settings on button click", () => {

        const settings = {
            current: {
                amount: 10,
                category: "",
                difficulty: ""
            }
        };

        const firstCurrentReference = settings.current;

        render(
            <SettingsContext.Provider value={[settings]}>
                <Settings data={"data"} />
            </SettingsContext.Provider>
        );

        const submitButton = screen.getByRole("button", { name: /save/i });
        fireEvent.click(submitButton);

        // check object identity 
        expect(settings.current).not.toBe(firstCurrentReference);
    });


});