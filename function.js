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
    let height = field.length;
    let width = field[rowIndex].length;

    let leftCellResult = numberOfNeighborsLeft(field, neighbors, rowIndex, colIndex);
    let topLeftCellResult = numberOfNeighborsTopLeft(field, neighbors, rowIndex, colIndex);
    let topCellResult = numberOfNeighborsTop(field, neighbors, rowIndex, colIndex);
    let topRightCellResult = numberOfNeighborsTopRight(field, neighbors, rowIndex, colIndex, width);
    let rightCellResult = numberOfNeighborsRight(field, rowIndex, colIndex);
    let bottomRightCellResult = numberOfNeighborsBottomRight(field, neighbors, rowIndex, colIndex, height, width);
    let bottomCellResult = numberOfNeighborsBottom(field, neighbors, rowIndex, colIndex,  height);
    let bottomLeftCellResult = numberOfNeighborsBottomLeft(field, neighbors, rowIndex, colIndex,  height);

    neighbors = leftCellResult + topLeftCellResult + topCellResult + topRightCellResult + rightCellResult +
        bottomRightCellResult + bottomCellResult + bottomLeftCellResult;
    return neighbors;
}

const numberOfNeighborsLeft = (field, leftNeighbor, rowIndex, colIndex) => {
    let leftCell = field[rowIndex][colIndex - 1];
    let leftCellIndex = colIndex - 1;
    if (leftCell === 1) {
        leftNeighbor += 1;
        return leftNeighbor;
    } else if (leftCell === 0 || leftCellIndex < 0) {
        return leftNeighbor;
    }
}
const numberOfNeighborsTopLeft = (field, topLeftNeighbor, rowIndex, colIndex) => {
    let topLeftCellRowIndex = rowIndex - 1;
    let topLeftCellColIndex = colIndex - 1;
    if (topLeftCellRowIndex >= 0 && topLeftCellColIndex >= 0) {
        let topLeftCell = field[topLeftCellRowIndex][topLeftCellColIndex];
        if (topLeftCell === 1) {
            topLeftNeighbor += 1;
            return topLeftNeighbor;
        } else if (topLeftCell === 0) {
            return topLeftNeighbor;
        }
    } else if (topLeftCellRowIndex < 0 || topLeftCellColIndex < 0) {
        return topLeftNeighbor;
    }
}
const numberOfNeighborsTop = (field, topNeighbor, rowIndex, colIndex) => {
    let topCellIndex = rowIndex - 1;
    if (topCellIndex >= 0) {
        let topCell = field[rowIndex - 1][colIndex];
        if (topCell === 1){
            topNeighbor += 1;
            return topNeighbor;
        } else if (topCell === 0) {
            return topNeighbor;
        }
    } else if (topCellIndex < 0) {
        return topNeighbor;
    }
}
const numberOfNeighborsTopRight = (field, topRightNeighbor, rowIndex, colIndex, width) => {
    let topRightCellRowIndex = rowIndex - 1;
    let topRightCellColIndex = colIndex + 1;
    if (topRightCellRowIndex >= 0 && topRightCellColIndex < width) {
        let topRightCell = field[topRightCellRowIndex][topRightCellColIndex];
        if (topRightCell === 1) {
            topRightNeighbor += 1;
            return topRightNeighbor;
        } else if (topRightCell === 0) {
            return topRightNeighbor;
        }
    } else if (topRightCellRowIndex < 0 || topRightCellColIndex >= width) {
        return topRightNeighbor;
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
const numberOfNeighborsBottomRight = (field, bottomRightNeighbor, rowIndex, colIndex, height, width) => {
    let bottomRightCellRowIndex = rowIndex + 1;
    let bottomRightCellColIndex = colIndex + 1;
    if (bottomRightCellRowIndex < height && bottomRightCellColIndex < width) {
        let bottomRightCell = field[bottomRightCellRowIndex][bottomRightCellColIndex];
        if (bottomRightCell === 1) {
            bottomRightNeighbor += 1;
            return bottomRightNeighbor;
        } else if (bottomRightCell === 0) {
            return bottomRightNeighbor;
        }
    } else if (bottomRightCellRowIndex >= height || bottomRightCellColIndex >= width) {
        return bottomRightNeighbor;
    }
}
const numberOfNeighborsBottom = (field, bottomNeighbor, rowIndex, colIndex,  height) => {
    let bottomCellIndex = rowIndex + 1;
    if (bottomCellIndex < height) {
        let bottomCell = field[rowIndex + 1][colIndex];
        if (bottomCell === 1){
            bottomNeighbor += 1;
            return bottomNeighbor;
        } else if (bottomCell === 0) {
            return bottomNeighbor;
        }
    } else if (bottomCellIndex >= height) {
        return bottomNeighbor;
    }
}
const numberOfNeighborsBottomLeft = (field, bottomLeftNeighbor, rowIndex, colIndex,  height) => {
    let bottomLeftCellRowIndex = rowIndex + 1;
    let bottomLeftCellColIndex = colIndex - 1;
    if (bottomLeftCellRowIndex < height && bottomLeftCellColIndex >= 0) {
        let bottomRightCell = field[bottomLeftCellRowIndex][bottomLeftCellColIndex];
        if (bottomRightCell === 1) {
            bottomLeftNeighbor += 1;
            return bottomLeftNeighbor;
        } else if (bottomRightCell === 0) {
            return bottomLeftNeighbor;
        }
    } else {
        return bottomLeftNeighbor;
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
