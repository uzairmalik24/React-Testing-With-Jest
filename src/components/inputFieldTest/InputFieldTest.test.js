import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import InputField from './InputFieldTest'


test.skip("testing change event", () => {
    render(<InputField />)
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
})