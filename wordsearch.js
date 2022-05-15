const wordSearch = (letters, word) => {
    // join the horizontal array 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(horizontalJoin);
    // horizontal one includes the word = true
    for (let l of horizontalJoin) {
        if (l.includes(word))
            return true;
    }
    // vertical one includes the word = true
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

// yesterday's work
const transpose = function (matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let column = [];
        for (let j = 0; j < matrix.length; j++) {     
            column.push(matrix[j][i]);
        }
        console.log(column);
        result.push(column);
    }
    return result;
};


//example
module.exports = wordSearch
