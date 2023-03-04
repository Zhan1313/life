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
        for (let j = 0; j < width; j++) {
            if (field[i][j] === 1) {
                if ((rowNumber === i + 2 || rowNumber === i)
                    && (columnNumber === j + 2 || columnNumber === j || columnNumber === j + 1)) {
                    neighbors += 1
                } else if (rowNumber === i + 1 && (columnNumber === j + 2 || columnNumber === j)) {
                    neighbors += 1
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