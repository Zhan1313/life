const numberOfNeighbors = (rowNumber, columnNumber) => {
    let field =
        [[0, 0, 0, 0, 1],
            [0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0]];
    let neighbors = 0;
    let height = field.length;

    if (field[rowNumber - 1][(columnNumber - 1) - 1] === 1) {
        neighbors += 1;
    } else if (field[rowNumber - 1][(columnNumber - 1) - 1] === 0
        || field[rowNumber - 1][(columnNumber - 1) - 1] === undefined) {
        neighbors += 0;
    }
    return neighbors;
}

numberOfNeighbors(1, 1) // 0
numberOfNeighbors(2, 4) // 1
