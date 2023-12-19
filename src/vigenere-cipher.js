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
    encrypt(text, key) {
      if(typeof text != 'string' && typeof key != 'string') throw new NotImplementedError('Incorrect arguments!');
        let code = "";

        text = text.toUpperCase();
        key = key.toUpperCase();

        for (let i = 0, j = 0; i < text.length; i++) {
            if (!this.alphabet.includes(text[i])) {
                code += text[i];
                continue;
            } else {
                code +=
                    this.alphabet[
                        (this.alphabet.indexOf(text[i]) +
                            this.alphabet.indexOf(key[j])) %
                            this.alphabet.length
                    ];
                j++;
            }
            if (j === key.length) j = 0;
        }
        if (!this.flag) return code.split("").reverse().join("");
        return code;
    }
    ////////////////////////////////////
    decrypt(code, key) {
      if(typeof code != 'string' && typeof key != 'string') throw new NotImplementedError('Incorrect arguments!');
        let text = "";
        key = key.toUpperCase();
        let j = 0;
        for (let i = 0; i < code.length; i++) {
            if (!this.alphabet.includes(code[i])) {
                text += code[i];
                continue;
            } else {
                text +=
                    this.alphabet[
                        (this.alphabet.length +
                            (this.alphabet.indexOf(code[i]) -
                                this.alphabet.indexOf(key[j]))) %
                            this.alphabet.length
                    ];
                j++;
            }
            if (j === key.length) j = 0;
        }
        if (!this.flag) return text.split("").reverse().join("");
        return text;
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
