import React, { useEffect, useState } from "react";


export default function MockApiTest() {

    const [data, setData] = useState([])
    const [error, setError] = useState("")


    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()
            setData(data)
        } catch (error) {
            setError("Something went wrong")
        }
    }

    return (
        <div>
            {data.map((item) => (
                <ul key={item.id}>
                    <li>{item.title}</li>
                    <li>{item.completed}</li>
                    <li>{item.userId}</li>
                </ul>
            ))}
            {error && <p>{error}</p>}
        </div>
    )
}