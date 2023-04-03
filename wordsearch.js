const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const combinedStrings = [...horizontalJoin, ...verticalJoin];

    for (l of combinedStrings) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

const transpose = (matrix) => {
    return matrix[0].map((col, i) => {
        return matrix.map((row) => {
            return row[i];
        });
    });
}
module.exports = wordSearch