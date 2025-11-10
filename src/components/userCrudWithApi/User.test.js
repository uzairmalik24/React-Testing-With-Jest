import { render, screen } from "@testing-library/react";
import React from "react";
import User from "./User";


describe("User Component", () => {

    test("Testing Fetch", async () => {
        render(<User />);
        const items = await screen.findAllByRole("cell");
        expect(items[0]).toHaveTextContent("Uzair")
    })

})