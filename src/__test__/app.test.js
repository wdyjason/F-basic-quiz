import { processUserData, processEduData } from "../app";
import getEduItem from "../compoent/educationItem";
import { validatePath } from "../utils/urlTools";

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
    const expectVal = `<li class="edu-item"><div class="edu-year"><h3>2077</h3></div><div class="edu-detial"><h3>test</h3><p>des</p></div></li>`;
    expect(getEduItem(input)).toBe(expectVal);
  });
});

describe("validate url", () => {
  test("should validate url success", () => {
    const input = "/users/1";
    expect(validatePath(input)).toBeTruthy();
  });
  test("should validate url fail", () => {
    const input = "/user/1";
    expect(validatePath(input)).toBeFalsy();
  });
});
