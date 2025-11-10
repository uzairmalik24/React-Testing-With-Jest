import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ClickEvent from "./ClickEvent";


test.skip("Testing Click Event", () => {
    render(<ClickEvent />)
    const btn = screen.getByTestId("myButton");
    fireEvent.click(btn);
    const textToAppear = screen.getByText(/Clicked/i);
    expect(textToAppear).toBeInTheDocument();
})