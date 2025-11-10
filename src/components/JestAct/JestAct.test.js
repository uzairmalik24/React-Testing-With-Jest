import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import JestAct from "./JestAct";
import userEvent from "@testing-library/user-event";


test.skip("Jest Act functional test", async () => {
    const usereve = userEvent.setup();
    render(<JestAct />);
    const input = screen.getByRole("textbox");
    await act(async () => {
        usereve.type(input, "Uzair");
    })
    const textToAppear = await screen.findByText(/Uzair/i);
    expect(textToAppear).toBeInTheDocument();
})