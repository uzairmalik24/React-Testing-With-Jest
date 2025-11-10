import React from "react";
import { render, screen } from "@testing-library/react";
import Child from "./child";



test.skip("Child Component", () => {
    const name = "Uzair";
    render(<Child name={name} />);
    const textToAppear = screen.getByText(/Uzair/i);
    expect(textToAppear).toBeInTheDocument();
})