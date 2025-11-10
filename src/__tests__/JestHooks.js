

beforeAll(() => {
    console.log("====Log Before All====")
})

beforeEach(() => {
    console.log("====Log Before Each====")
})

describe.skip("Tests in Describe", () => {
    test("Test 1", () => {
        console.log("====Log Test 1====")
    })
    test("Test 2", () => {
        console.log("====Log Test 2====")
    })
})

afterEach(() => {
    console.log("====Log After Each====")
})

afterAll(() => {
    console.log("====Log After All====")
})