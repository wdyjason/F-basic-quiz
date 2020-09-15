import processUserData from "../app";

jest.mock("../utils/http.js", () => {
  return jest.fn().mockResolvedValue({});
});
describe("user basic data", () => {
  test("should get user data success", async () => {
    await expect(processUserData()).resolves.toEqual({});
  });
});
