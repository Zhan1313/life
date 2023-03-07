const getNextGeneration = (array) => {
    let newArray = [...array];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let arrayRow = i + 1;
            let arrayCol = j + 1;
            let neighbors = getNumberOfNeighbors(array, arrayRow, arrayCol);
            if (array[i][j] === 1) {
                if (neighbors === 2 || neighbors === 3) {
                    newArray[i][j] = 1;
                } else if (neighbors < 2 || neighbors > 3) {
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
let firstGenerationField =
    [[0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1],
        [0, 1, 1, 0, 0]];

getNextGeneration(firstGenerationField);

const getNumberOfNeighbors = (field, rowNumber, columnNumber) => {
    let neighbors = 0;
    let rowIndex = rowNumber - 1;
    let colIndex = columnNumber - 1;

    let leftCellResult = numberOfNeighborsLeft(field, rowIndex, colIndex);
    let topLeftCellResult = numberOfNeighborsTopLeft(field, rowIndex, colIndex);
    let topCellResult = numberOfNeighborsTop(field, rowIndex, colIndex);
    let topRightCellResult = numberOfNeighborsTopRight(field, rowIndex, colIndex);
    let rightCellResult = numberOfNeighborsRight(field, rowIndex, colIndex);
    let bottomRightCellResult = numberOfNeighborsBottomRight(field, rowIndex, colIndex);
    let bottomCellResult = numberOfNeighborsBottom(field, rowIndex, colIndex);
    let bottomLeftCellResult = numberOfNeighborsBottomLeft(field, rowIndex, colIndex);

    neighbors = leftCellResult + topLeftCellResult + topCellResult + topRightCellResult + rightCellResult +
        bottomRightCellResult + bottomCellResult + bottomLeftCellResult;
    return neighbors;
}

const numberOfNeighborsLeft = (field, rowIndex, colIndex) => {
    let leftCellIndex = colIndex - 1;
    if (leftCellIndex < 0) {
        return 0;
    }
    if (leftCellIndex >= 0) {
        return field[rowIndex][leftCellIndex];
    }
}
const numberOfNeighborsTopLeft = (field, rowIndex, colIndex) => {
    let topLeftCellRowIndex = rowIndex - 1;
    let topLeftCellColIndex = colIndex - 1;
    if (topLeftCellRowIndex < 0 || topLeftCellColIndex < 0) {
        return 0;
    }
    if (topLeftCellRowIndex >= 0 && topLeftCellColIndex >= 0) {
        return field[topLeftCellRowIndex][topLeftCellColIndex];
    }
}
const numberOfNeighborsTop = (field, rowIndex, colIndex) => {
    let topCellIndex = rowIndex - 1;
    if (topCellIndex < 0) {
        return 0;
    }
    if (topCellIndex >= 0) {
        return field[topCellIndex][colIndex];
    }
}
const numberOfNeighborsTopRight = (field, rowIndex, colIndex) => {
    let width = field[rowIndex].length;
    let topRightCellRowIndex = rowIndex - 1;
    let topRightCellColIndex = colIndex + 1;
    if (topRightCellRowIndex < 0 || topRightCellColIndex >= width) {
        return 0;
    }
    if (topRightCellRowIndex >= 0 && topRightCellColIndex < width) {
        return field[topRightCellRowIndex][topRightCellColIndex];
    }
}
const numberOfNeighborsRight = (field, rowIndex, colIndex) => {
    let width = field[rowIndex].length;
    let rightCellIndex = colIndex + 1;
    if (rightCellIndex >= width) {
        return 0;
    }
    if (rightCellIndex < width) {
        return field[rowIndex][rightCellIndex];
    }
}
const numberOfNeighborsBottomRight = (field, rowIndex, colIndex) => {
    let height = field.length;
    let width = field[rowIndex].length;
    let bottomRightCellRowIndex = rowIndex + 1;
    let bottomRightCellColIndex = colIndex + 1;
    if (bottomRightCellRowIndex >= height || bottomRightCellColIndex >= width) {
        return 0;
    }
    if (bottomRightCellRowIndex < height && bottomRightCellColIndex < width) {
        return field[bottomRightCellRowIndex][bottomRightCellColIndex];
    }
}
const numberOfNeighborsBottom = (field, rowIndex, colIndex) => {
    let height = field.length;
    let bottomCellIndex = rowIndex + 1;
    if (bottomCellIndex >= height) {
        return 0;
    }
    if (bottomCellIndex < height) {
        return field[bottomCellIndex][colIndex];
    }
}
const numberOfNeighborsBottomLeft = (field, rowIndex, colIndex) => {
    let height = field.length;
    let bottomLeftCellRowIndex = rowIndex + 1;
    let bottomLeftCellColIndex = colIndex - 1;
    if (bottomLeftCellRowIndex >= height || bottomLeftCellColIndex < 0) {
        return 0;
    }
    if (bottomLeftCellRowIndex < height && bottomLeftCellColIndex >= 0) {
        return field[bottomLeftCellRowIndex][bottomLeftCellColIndex];
    }
}

/*// Углы
getNumberOfNeighbors(1,1) //0
getNumberOfNeighbors(1,5) //1
getNumberOfNeighbors(5,1) //2
getNumberOfNeighbors(5,5) //1
// Верхняя граница
getNumberOfNeighbors(1,2) //1
getNumberOfNeighbors(1,3) //1
getNumberOfNeighbors(1,4) //3
// Нижняя граница
getNumberOfNeighbors(5,2) //3
getNumberOfNeighbors(5,3) //3
getNumberOfNeighbors(5,4) //3
// Левая граница
getNumberOfNeighbors(2,1) //1
getNumberOfNeighbors(3,1) //2
getNumberOfNeighbors(4,1) //3
// Правая граница
getNumberOfNeighbors(2,5) //2
getNumberOfNeighbors(3,5) //3
getNumberOfNeighbors(4,5) //1
// Середина
getNumberOfNeighbors(2,3) //2
getNumberOfNeighbors(4,2) //4
getNumberOfNeighbors(4,3) //5*/

/*
let field =
    [[0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1],
        [0, 1, 1, 0, 0]];*/