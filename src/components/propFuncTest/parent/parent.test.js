import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Parent from "./Parent";
import React from "react";


test.skip("Parent Component", async () => {
    const usereve = userEvent.setup();
    render(<Parent />);
    const btn = screen.getByRole("button");
    await usereve.click(btn);
    const textToAppear = await screen.findByText(/Uzair/i);
    expect(textToAppear).toBeInTheDocument();
})