const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(flag = true) {
        this.flag = flag;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    #encodeDecode(str, key, isEncrypt = true) {
        let out = "";
        str = str.toUpperCase();
        key = key.toUpperCase();

        for (let i = 0, j = 0; i < str.length; i++) {
            if (!this.alphabet.includes(str[i])) {
                out += str[i];
                continue;
            } else {
                out += (isEncrypt) ?
                    this.alphabet[
                        (this.alphabet.indexOf(str[i]) +
                            (this.alphabet.indexOf(key[j]))) %
                            this.alphabet.length
                    ] :
                    this.alphabet[
                        (this.alphabet.length +
                            (this.alphabet.indexOf(str[i]) -
                                this.alphabet.indexOf(key[j]))) %
                            this.alphabet.length
                    ];
                j++;
            }
            if (j === key.length) j = 0;
        }
        if (!this.flag) return out.split("").reverse().join("");
        return out;
    }

    encrypt(text, key) {
        if (typeof text != "string" && typeof key != "string")
            throw new NotImplementedError("Incorrect arguments!");
        return this.#encodeDecode(text, key);
    }

    decrypt(code, key) {
        if (typeof code != "string" && typeof key != "string")
            throw new NotImplementedError("Incorrect arguments!");
        
        return this.#encodeDecode(code, key, false);
    }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt("attack at dawn!", "alphonse")); // => 'AEIHQX SX DLLU!'
console.log(reverseMachine.encrypt("attack at dawn!", "alphonse")); // => '!ULLD XS XQHIEA'

console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse")); //=> 'ATTACK AT DAWN!'
console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse")); // => '!NWAD TA KCATTA'

console.log(directMachine.decrypt("UWJJW XAGWLNFM VNNNDXHVWWL :)", "js"));

module.exports = {
    VigenereCipheringMachine,
};
