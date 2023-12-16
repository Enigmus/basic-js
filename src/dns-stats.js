const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let resultObj = {};
    let temp = [];

    domains.forEach((el) => {
        let tempArr = [];
        el.split(".")
            .reverse()
            .forEach((elem, i) => {
                tempArr[i] =
                    (tempArr[i - 1] ? tempArr[i - 1] : "") + "." + elem;
                temp.push(tempArr[i]);
            });
    });

    temp.forEach((el) => {
        if (resultObj.hasOwnProperty(el)) resultObj[el] += 1;
        else resultObj[el] = 1;
    });

    return resultObj;
}

//console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));

module.exports = {
    getDNSStats,
};
