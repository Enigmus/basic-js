const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let arr = s2.split("");
    let k = 0;

    for (let i = 0; i < s1.length; i++) {
        if (arr.includes(s1[i])) {
            delete arr[arr.indexOf(s1[i])];
            k++;
        }
    }
    return k;
}

/* console.log(getCommonCharacterCount('aabcc', 'adcaa')); // 3
console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'));  // 4
console.log(getCommonCharacterCount('abca', 'xyzbac')); // 3
console.log(getCommonCharacterCount('', 'abc'));  // 0
console.log(getCommonCharacterCount('a', 'b')); // 0 */

module.exports = {
    getCommonCharacterCount,
};
