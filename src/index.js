
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let check = matrix ? matrix.length : 0;
    if (check) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                matrix[i].reverse();
            }
        }
        return matrix.reduce((result, item) => result.concat(item), []);
    }
    return [];
};
