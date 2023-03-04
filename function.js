const numberOfNeighbors = (rowNumber, columnNumber) => {
    let field =
        [[0, 0, 0, 0, 1],
            [0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0]];
    let neighbors = 0;
    let height = field.length;

    for (let i = 0; i < height; i++) {
        let width = field[i].length;
        if(rowNumber - 1 === i) {
            for (let j = 0; j < width; j++) {
                if(columnNumber - 1 === j) {
                    if (field[i][j - 1] === 1) {
                        neighbors += 1;
                    } else if (field[i][j - 1] === 1 || field[i][j - 1] === undefined) {
                        neighbors += 0;
                    }
                }
            }
        }
    }
    return neighbors;
}

numberOfNeighbors(1,1) // 0
numberOfNeighbors(2,4) // 1
