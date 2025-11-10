import React from "react";
import userEvent from "@testing-library/user-event";
import UserEventComp from "./UserEvent";
import { render, screen } from "@testing-library/react";


test.skip("Testing user event", async () => {
    const event = userEvent.setup();
    render(<UserEventComp />)
    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument();
    event.click(btn);
    const text = await screen.findByText("Uzair")
    expect(text).toBeInTheDocument();
})