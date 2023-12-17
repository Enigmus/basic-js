const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    // итоговая матрица
    let field = [];
    // количество строк
    let colRows = matrix.length;
    // количество столбцов
    let colColumns = matrix[0].length;
    // заполняем ее 0, в размер с исходной
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[0].length; j++) {
            row.push(0);
        }
        field.push(row);
        row = [];
    }
    // если в матрице находим true, соседние ячейки увеличиваем на 1
    for (let i = 0; i < colRows; i++) {
        for (let j = 0; j < colColumns; j++) {
            if (matrix[i][j] === true) {
                let rowPrev = i - 1 < 0 ? 0 : i - 1;
                let rowNext = i + 1 > colRows ? i : i + 1;
                for (let row = rowPrev; row <= rowNext; row++) {
                    let columnPrev = j - 1 < 0 ? 0 : j - 1;
                    let columnNext = j + 1 > colColumns ? j : j + 1;
                    for (let col = columnPrev; col <= columnNext; col++) {
                        if (row === i && col === j) continue;
                        field[row][col] += 1;
                    }
                }
            }
        }
    }
    return field;
}

/* console.log(
    minesweeper([
        [true, false, false],
        [false, true, false],
        [false, false, false],
    ])
); */

module.exports = {
    minesweeper,
};
