import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import FunctionalComp from "./FunctionalComp";

describe.skip("Functional Component", () => {
    test("handleForm updates newName on submit", () => {
        render(<FunctionalComp />);

        const input = screen.getByRole("textbox"); 
        const button = screen.getByTestId("submit");
        fireEvent.change(input, { target: { value: "Uzair" } });
        fireEvent.click(button);
        expect(screen.getByText("Uzair")).toBeInTheDocument();
    });
});
