import { add } from "add";
import { expect, test, describe } from "vitest";
test("add function adds two numbers", function () {
  const result = add(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});
