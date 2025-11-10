import { render, screen } from "@testing-library/react";
import { TextOnScreen } from "./TextOnScreen";
import React from "react";


describe.skip("UI tests only", () => {

    test("Text on Screen", () => {
        render(<TextOnScreen />);
        const text = screen.getByText(/TextOnScreen/i);
        expect(text).toBeInTheDocument();
    })

})