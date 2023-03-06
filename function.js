const numberOfNeighbors = (rowNumber, columnNumber) => {
    let field =
        [[0, 0, 0, 0, 1],
            [0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0]];

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
    if (leftCellIndex >= 0) {
        return field[rowIndex][leftCellIndex];
    } else {
        return 0;
    }
}
const numberOfNeighborsTopLeft = (field, rowIndex, colIndex) => {
    let topLeftCellRowIndex = rowIndex - 1;
    let topLeftCellColIndex = colIndex - 1;
    if (topLeftCellRowIndex >= 0 && topLeftCellColIndex >= 0) {
        return field[topLeftCellRowIndex][topLeftCellColIndex];
    } else {
        return 0;
    }
}
const numberOfNeighborsTop = (field, rowIndex, colIndex) => {
    let topCellIndex = rowIndex - 1;
    if (topCellIndex >= 0) {
        return field[topCellIndex][colIndex];
    } else {
        return 0;
    }
}
const numberOfNeighborsTopRight = (field, rowIndex, colIndex) => {
    let width = field[rowIndex].length;
    let topRightCellRowIndex = rowIndex - 1;
    let topRightCellColIndex = colIndex + 1;
    if (topRightCellRowIndex >= 0 && topRightCellColIndex < width) {
        return field[topRightCellRowIndex][topRightCellColIndex];
    } else {
        return 0;
    }
}
const numberOfNeighborsRight = (field, rowIndex, colIndex) => {
    let width = field[rowIndex].length;
    let rightCellIndex = colIndex + 1;
    if (rightCellIndex < width) {
        return field[rowIndex][rightCellIndex];
    } else {
        return 0;
    }
}
const numberOfNeighborsBottomRight = (field, rowIndex, colIndex) => {
    let height = field.length;
    let width = field[rowIndex].length;
    let bottomRightCellRowIndex = rowIndex + 1;
    let bottomRightCellColIndex = colIndex + 1;
    if (bottomRightCellRowIndex < height && bottomRightCellColIndex < width) {
        return field[bottomRightCellRowIndex][bottomRightCellColIndex];
    } else {
        return 0;
    }
}
const numberOfNeighborsBottom = (field, rowIndex, colIndex) => {
    let height = field.length;
    let bottomCellIndex = rowIndex + 1;
    if (bottomCellIndex < height) {
        return field[bottomCellIndex][colIndex];
    } else {
        return 0;
    }
}
const numberOfNeighborsBottomLeft = (field, rowIndex, colIndex) => {
    let height = field.length;
    let bottomLeftCellRowIndex = rowIndex + 1;
    let bottomLeftCellColIndex = colIndex - 1;
    if (bottomLeftCellRowIndex < height && bottomLeftCellColIndex >= 0) {
        return field[bottomLeftCellRowIndex][bottomLeftCellColIndex];
    } else {
        return 0;
    }
}

// Углы
numberOfNeighbors(1,1) //0
numberOfNeighbors(1,5) //1
numberOfNeighbors(5,1) //2
numberOfNeighbors(5,5) //1
// Верхняя граница
numberOfNeighbors(1,2) //1
numberOfNeighbors(1,3) //1
numberOfNeighbors(1,4) //3
// Нижняя граница
numberOfNeighbors(5,2) //3
numberOfNeighbors(5,3) //3
numberOfNeighbors(5,4) //3
// Левая граница
numberOfNeighbors(2,1) //1
numberOfNeighbors(3,1) //2
numberOfNeighbors(4,1) //3
// Правая граница
numberOfNeighbors(2,5) //2
numberOfNeighbors(3,5) //3
numberOfNeighbors(4,5) //1
// Середина
numberOfNeighbors(2,3) //2
numberOfNeighbors(4,2) //4
numberOfNeighbors(4,3) //5
