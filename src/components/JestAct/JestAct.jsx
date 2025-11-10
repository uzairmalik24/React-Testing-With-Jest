import React, { useState } from "react";

const JestAct = () => {
    const [data, setData] = useState("")
    return (
        <>
            <p>{data}</p>
            <input type="text" onChange={(e) => setData(e.target.value)} />
        </>
    )
};

export default JestAct;