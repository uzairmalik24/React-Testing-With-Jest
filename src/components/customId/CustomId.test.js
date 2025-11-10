import React from "react";
import { render, screen, configure } from "@testing-library/react";
import CustomId from "./CustomId";

configure({ testIdAttribute: "element-id" });

test.skip("Testing Custom ID", () => {
    render(<CustomId />);
    const textToAppear = screen.getByTestId('customId');
    const newId = screen.getByTestId('newId');
    expect(textToAppear).toBeInTheDocument();
    expect(newId).toBeInTheDocument();
})