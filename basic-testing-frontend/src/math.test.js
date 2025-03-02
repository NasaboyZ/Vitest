import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in a array", () => {
  // Arrange
  const numbers = [1, 2];

  const expectedResult = numbers.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );
  //Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expectedResult);
});
