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

it("should yield NAN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  // Arrange
  const numbers = ["1", "2"];

  // Act
  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (preValue, curValue) => +preValue + +curValue,
    0
  );

  //Assert
  expect(result).toBe(expectedResult);
});
