import React, { useState } from "react"


export default function UserEventComp() {

    const [data, setData] = useState("")
    return (
        <>
            {data && <p>{data}</p>}
            <button data-testid="myButton" onClick={() => setData("Uzair")}>Click</button>
        </>
    )
}