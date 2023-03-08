import { getNumberOfNeighbors } from "./utils.js";

export const getNextGeneration = (array) => {
    let newArray = JSON.parse(JSON.stringify(array));
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let arrayRow = i + 1;
            let arrayCol = j + 1;
            let neighbors = getNumberOfNeighbors(array, arrayRow, arrayCol);
            if (array[i][j] === 1) {
                if (neighbors === 2 || neighbors === 3) {
                    newArray[i][j] = 1;
                } else {
                    newArray[i][j] = 0;
                }
            } else if (array[i][j] === 0) {
                if (neighbors === 3) {
                    newArray[i][j] = 1;
                } else {
                    newArray[i][j] = 0;
                }
            }
        }
    }
    return newArray;
}

