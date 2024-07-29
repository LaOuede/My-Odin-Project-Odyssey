import { analyzeArray, calculAverage } from "../src/analyzeArray";

test('[1,8,3,4,2,6]', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
 });
});

test('[1,8,3,4,2,6]', () => {
  expect(calculAverage([1,8,3,4,2,6])).toEqual(4);
});
