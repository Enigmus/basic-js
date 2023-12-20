const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let {
        repeatTimes = 1,
        separator = "+",
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = "|",
    } = options;

    str = String(str);
    repeatTimes = repeatTimes ? Number(repeatTimes) : 1;
    addition = String(addition);
    additionRepeatTimes = additionRepeatTimes ? Number(additionRepeatTimes) : 1;
    additionSeparator = String(additionSeparator);

    let out = "";

    let a = addition.concat(additionSeparator).repeat(additionRepeatTimes);
    a = a.substring(0, a.lastIndexOf(additionSeparator));

    out = String(str.concat(a).concat(separator)).repeat(repeatTimes);
    out = out.substring(0, out.lastIndexOf(separator));

    console.log(
        "STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS"
    );

    return out;
}
/**
 * repeatTimesустанавливает количество numberповторений str;
separatorпредставляет собой stringразделяющее повторение str;

additionявляется дополнительным string, которое будет добавляться при каждом повторении str;
additionRepeatTimesустанавливает количество numberповторений addition;
additionSeparatorпредставляет собой stringразделяющее повторение addition.
 */

console.log(
    repeater("STRING", {
        repeatTimes: 3,
        separator: "**",
        addition: "PLUS",
        additionRepeatTimes: 3,
        additionSeparator: "00",
    })
);
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

module.exports = {
    repeater,
};
