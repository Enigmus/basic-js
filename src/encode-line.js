const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let k = 1;
    return str
        .split("")
        .map((el, i, arr) => {
            let out;
            if (el === arr[i + 1]) {
                k++;
            } else {
                if (k > 1) out = k;
                else out = "";

                k = 1;
                return out + el;
            }
        })
        .filter((el) => el != undefined)
        .join("");
}

//console.log(encodeLine("aabbbc"));

module.exports = {
    encodeLine,
};
