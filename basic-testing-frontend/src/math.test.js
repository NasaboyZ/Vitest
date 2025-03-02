import { it, expect } from "vitest";
import { add } from "./math";
import exp from "constants";

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

it("should yield 0 if an empty arry is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

// it("should throw an error if no vlaue is passed into the function", () => {
//   try {
//     const result = add();
//   } catch (error) {
//     expect(error).toBeDefined();
//   }
// });

// kannn auch so geschrieben werden
it("should throw an error if no vlaue is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an arry", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFN = () => {
    add(num1, num2);
  };

  expect(resultFN).toThrow();
});
