import React, { useState } from "react"


export default function InputField() {

    const [data, setData] = useState("")

    return (
        <>
            <input type="text" value={data} name="" id="" onChange={(e) => setData(e.target.value)} />
        </>
    )

} 