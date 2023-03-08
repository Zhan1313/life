import { comparison } from "./comparison.js";
import { getNextGeneration} from "./generation.js";

let firstGenerationField1 =
       [[0, 0, 0],
        [0, 0, 1],
        [1, 1, 0]];

let firstGenerationField1Test =
       [[0, 0, 0],
        [0, 1, 0],
        [0, 1, 0]];

let firstGenerationField2 =
       [[0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]];
let firstGenerationField2Test =
       [[0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]];

let firstGenerationField3 =
       [[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]];
let firstGenerationField3Test =
       [[0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]];

let firstGenerationField4 =
       [[1, 0, 0],
        [0, 0, 0],
        [0, 1, 0]];
let firstGenerationField4Test =
       [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]];

let firstGenerationField5 =
       [[1, 0, 0],
        [0, 0, 0],
        [0, 1, 0]];

console.log(getNextGeneration(firstGenerationField1));
console.log(comparison(firstGenerationField1Test, firstGenerationField1)) // false
console.log(comparison(firstGenerationField1Test, getNextGeneration(firstGenerationField1)))// true
console.log(comparison(firstGenerationField2Test, firstGenerationField2))// false
console.log(comparison(firstGenerationField2Test, getNextGeneration(firstGenerationField2)))// true
console.log(comparison(firstGenerationField3Test, firstGenerationField3))// false
console.log(comparison(firstGenerationField3Test, getNextGeneration(firstGenerationField3)))// true
console.log(comparison(firstGenerationField4Test, firstGenerationField4))// false
console.log(comparison(firstGenerationField4Test, getNextGeneration(firstGenerationField4)))// true

