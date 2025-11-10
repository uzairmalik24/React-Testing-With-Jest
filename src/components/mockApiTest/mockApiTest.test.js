import React from "react";
import { render, screen } from "@testing-library/react";
import MockApiTest from "./mockApiTest";


test.skip("Mock Api Test", async () => {
    render(<MockApiTest />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(9);
})