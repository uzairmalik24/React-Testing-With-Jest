import { rest } from 'msw'

const url = process.env.VITE_BASE_URL || 'https://jsonplaceholder.typicode.com'

export const userHandlers = [

    rest.get(`${url}/users`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                [
                    {
                        id: 1,
                        name: "Uzair",
                        username: "Uzair Malik",
                        email: "K2NwI@example.com"
                    }
                ]
            )
        )
    }),


    rest.get(`${url}/users/:id`, (req, res, ctx) => {
        const { id } = req.params
        return res(
            ctx.status(200),
            ctx.json(
                {
                    id: Number(id),
                    name: "Uzair",
                    username: "Uzair Malik",
                    email: "K2NwI@example.com"
                }
            )
        )
    })

]