import React from "react";
import { render, screen } from "@testing-library/react";
import Parent from "./parent";


test.skip("Parent Component", () => {
    const name = "Uzair";
    render(<Parent />);
    const textToAppear = screen.getByText(/Uzair/i);
    expect(textToAppear).toBeInTheDocument();
})