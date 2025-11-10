import React, { useState } from "react";
import ChildButton from "../child/Child.test";

const Parent = () => {
    const [data, setData] = useState("")
    return (
        <>
            <h1>Parent</h1>
            <p>{data}</p>
            <div>Child Component:  <ChildButton onClick={() => setData("Uzair")} /></div>
        </>
    )
};

export default Parent;