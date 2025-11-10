const url = process.env.VITE_BASE_URL || 'https://jsonplaceholder.typicode.com'

export const fetchUser = async (id) => {
    const response = await fetch(`${url}/users/${id}`)
    const data = await response.json()
    return data
}


export const fetchUsers = async () => {
    const response = await fetch(`${url}/users`)
    const data = await response.json()
    return data
}


export const createUser = async (user) => {
    const response = await fetch(`${url}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data = await response.json()
    return data
}

export const updateUser = async (id, user) => {
    const response = await fetch(`${url}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data = await response.json()
    return data
}

export const deleteUser = async (id) => {
    const response = await fetch(`${url}/users/${id}`, {
        method: 'DELETE',
    })
    const data = await response.json()
    return data
}