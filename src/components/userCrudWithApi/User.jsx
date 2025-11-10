import React, { useEffect } from "react";
import { fetchUsers } from "../../services/user.service";

export default function User() {
    const [users, setUsers] = React.useState([])
    const [error, setError] = React.useState("")
    const [editMode, setEditMode] = React.useState(false)
    const [editUser, setEditUser] = React.useState({})
    const [userId, setUserId] = React.useState("")

    useEffect(() => {
        fetchAllUsers()
    }, [])

    const fetchAllUsers = async () => {
        try {
            const resp = await fetchUsers()
            setUsers(resp)
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {users.map((user) => (
                    <tbody key={user.id}>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}