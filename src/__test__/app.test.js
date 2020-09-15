import { processUserData, processEduData } from "../app";
import getEduItem from "../compoent/educationItem";

jest.mock("../utils/http.js", () => {
  return jest.fn().mockResolvedValue([]);
});
describe("user basic data", () => {
  test("should get user data success", async () => {
    await expect(processUserData()).resolves.toEqual([]);
  });
});
describe("user education data", () => {
  test("should get user education data success", async () => {
    await expect(processEduData()).resolves.toEqual([]);
  });
});

describe("education item", () => {
  test("should get user education item success", () => {
    const input = { year: 2077, title: "test", description: "des" };
    const expectVal = `<li><div class="edu-year"><h2>2077</h2></div><div class="edu-detial"><h2>test</h2><p>des</p></div></li>`;
    expect(getEduItem(input)).toBe(expectVal);
  });
});
