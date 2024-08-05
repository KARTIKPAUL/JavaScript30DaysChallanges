var solveNQueens = function (n) {
    if (n === 1) {
        return [["Q"]];
    }
    if (n == 2 || n === 3) {
        return [];
    }
    let results = [];
    let solution = Array(n).fill(-1);
    solveNQueensRec(n, solution, 0, results);
    return results;
};

function solveNQueensRec(n, solution, row, results) {
    if (row == n) {
        const solutionStr = constructSolutionString(solution);
        results.push(solutionStr);
        return;
    }

    for (let i = 0; i < n; i++) {
        let valid = isValidMove(row, i, solution);
        if (valid) {
            solution[row] = i;
            solveNQueensRec(n, solution, row + 1, results);
        }
    }
}

function isValidMove(proposedRow, proposedCol, solution) {
    for (let i = 0; i < proposedRow; i++) {
        let oldRow = i,
            oldCol = solution[i],
            diagonalOffset = proposedRow - oldRow;

        if (
            oldCol == proposedCol ||
            oldCol == proposedCol - diagonalOffset ||
            oldCol == proposedCol + diagonalOffset
        ) {
            return false;
        }
    }
    return true;
}

function constructSolutionString(solution) {
    const returnArr = [];
    for (i = 0; i < solution.length; i++) {
        const returnStr = Array(solution.length).fill('.');
        returnStr[solution[i]] = "Q";
        returnArr.push(returnStr.join(''));
    }
    return returnArr;
}

const n = 4;
const solutions = solveNQueens(n);
console.log(solutions);


console.log(`Solutions for ${n}-Queens:`);

solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach(row => console.log(row));
    console.log('');
});

