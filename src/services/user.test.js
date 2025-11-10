import { fetchUser, fetchUsers } from "./user.service";

describe("Testing Users APIs", () => {

    test("Fetch User Testing", async () => {
        const resp = await fetchUsers()
        expect(resp).toHaveLength(1)
        expect(resp[0].name).toBe("Uzair")
    })

    test("Fetch 1 User", async () => {
        const resp = await fetchUser(1)
        expect(resp.id).toBe(1)
        expect(resp.name).toBe("Uzair")
    })

})