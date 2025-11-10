import React, { useState } from "react"

export default function ClickEvent() {


    const [isClicked, setIsClicked] = useState(false)


    return (
        <>
            {isClicked && (
                <p>Clicked</p>
            )}
            <button data-testid="myButton" onClick={() => setIsClicked(true)}>Click</button>
        </>
    )

}