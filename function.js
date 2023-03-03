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
                    if (rowNumber === 1) {
                        if(columnNumber === 1) {
                            neighbors = field[i][j+1] + field[i+1][j] + field[i+1][j+1]
                        } else if (columnNumber === width) {
                            neighbors = field[i][j-1] + field[i+1][j-1] + field[i+1][j]
                        } else {
                            neighbors = field[i][j+1] + field[i][j-1] + field[i+1][j] + field[i+1][j-1] + field[i+1][j+1]
                        }
                    } else if (rowNumber === height) {
                        if(columnNumber === 1) {
                            neighbors = field[i][j+1] + field[i-1][j] + field[i-1][j+1]
                        } else if (columnNumber === width) {
                            neighbors = field[i][j-1] + field[i-1][j-1] + field[i-1][j]
                        } else {
                            neighbors = field[i][j+1] + field[i][j-1] + field[i-1][j] + field[i-1][j-1] + field[i-1][j+1]
                        }
                    } else if (columnNumber === 1 && (rowNumber >= 2 && rowNumber <= height - 1)) {
                        neighbors = field[i][j+1] + field[i-1][j] + field[i-1][j+1] + field[i+1][j] + field[i+1][j+1]
                    } else if (columnNumber === width && (rowNumber >= 2 && rowNumber <= height - 1)) {
                        neighbors = field[i-1][j] + field[i-1][j-1] + field[i][j-1] + field[i+1][j-1] + field[i+1][j]
                    } else {
                        neighbors = field[i][j-1] + field[i][j+1] + field[i-1][j] + field[i+1][j]
                            + field[i-1][j-1] + field[i-1][j+1] + field[i+1][j-1] + field[i+1][j+1]
                    }
                }
            }
        }
    }
    return neighbors;
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
numberOfNeighbors(2,3) // 2
numberOfNeighbors(4,2) // 4
numberOfNeighbors(4,3) //5