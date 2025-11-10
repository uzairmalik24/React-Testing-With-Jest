import React from "react";
import Child from "../child/child";


export default function Parent() {
    return (
        <div>
            <h1>Parent</h1>
            <div>Child Component:  <Child name="Uzair" /></div>
        </div>
    )
}