import React from "react";
import SnapshotTest from "./SnapshotTest";
import { render } from "@testing-library/react";


describe.skip("Snapshot Test", () => {

    test("Snapshot Test", () => {
        const { asFragment } = render(<SnapshotTest />);
        expect(asFragment()).toMatchSnapshot();
    })
})