const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
    let str = num.toString();
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        let t = str.substring(0, i) + str.substring(i + 1);
        arr.push(+t);
    }

    return Math.max(...arr);
}

//console.log(deleteDigit(152));

module.exports = {
    deleteDigit,
};
