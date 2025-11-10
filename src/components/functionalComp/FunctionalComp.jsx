import React, { useState } from "react";

export default function FunctionalComp() {

    const [name, setName] = useState("")
    const [newName, setNewName] = useState("")

    const handleForm = () => {
        setNewName(name)
    }

    return (
        <>
            {name && <p>{name}</p>}
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button data-testid="submit" onClick={handleForm}>Submit</button>
        </>
    )
}