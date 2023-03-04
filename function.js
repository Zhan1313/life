const numberOfNeighbors = (rowNumber, columnNumber) => {
    let field =
        [[0, 0, 0, 0, 1],
            [0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0]];
    let neighbors = 0;
    let height = field.length;
    let rowIndex = rowNumber - 1;
    let colIndex = columnNumber - 1;

    if (field[rowIndex][colIndex - 1] === 1) {
        neighbors += 1;
    } else if (field[rowIndex][colIndex - 1] === 0
        || colIndex - 1 < 0) {
        neighbors += 0;
    }
    return neighbors;
}
numberOfNeighbors(1, 1) // 0
numberOfNeighbors(2, 4) // 1
numberOfNeighbors(1,4) // 0