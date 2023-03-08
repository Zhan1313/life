export const comparison = (arr1, arr2) => {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === arr2[i][j]) {
                arr3.push(arr1[i][j]);
            } else {
                return false;
            }
        }
    }
    if (arr3 !== []) {
        return true;
    }
}

