const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr))
        throw new Error("'arr' parameter must be an instance of the Array!");

    let setup = [
        "--discard-next",
        "--discard-prev",
        "--double-next",
        "--double-prev",
    ];
    let newArr = [];
    let isDel = false;
    arr.forEach((el, ind) => {
        if (el === setup[0]) {
            if (ind === arr.length - 1) {
                return true;
            }

            isDel = true;
            return true;
        }
        if (el === setup[1]) {
            if (ind === 0) {
                return true;
            }
            if (isDel) {
                isDel = false;
                return true;
            }
            newArr.pop();
            return true;
        }
        if (el === setup[2]) {
            if (ind === arr.length - 1) {
                return true;
            }

            if (!setup.includes(arr[ind + 1])) {
                newArr.push(arr[ind + 1]);
            }
            return true;
        }
        if (el === setup[3]) {
            if (ind === 0) {
                return true;
            }

            if (!setup.includes(arr[ind - 1])) {
                if (isDel) {
                    isDel = false;
                    return true;
                }
                newArr.push(arr[ind - 1]);
            }
            return true;
        }

        if (isDel) {
            return 0;
        }
        //isDel = false;
        newArr.push(el);
    });

    return newArr;
}

console.log(
    transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);

console.log(transform([1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5]));

console.log(
    transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])
);

console.log(
    transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5])
);

module.exports = {
    transform,
};
