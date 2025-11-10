import React from "react";
import ChildButton from "./Child";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test.skip("Child Component", async () => {
    const jestFn = jest.fn();
    render(<ChildButton onClick={jestFn} />);
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    expect(jestFn).toHaveBeenCalledTimes(1);
})