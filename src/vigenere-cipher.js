const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  static alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  isDirect;

  constructor(isDirect) {
    this.isDirect = isDirect;
  }
  
  encrypt(message, key) {
    this.validateArguments(message, key)
    return this.processMessage(message, key, false)
  }

  decrypt(encryptedMessage, key) {
    this.validateArguments(encryptedMessage, key);
    return this.processMessage(encryptedMessage, key, true)
  }

  processMessage(message, key, isDecrypt) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let n = -1;
    let arr = [];
    for (let i = 0; i < message.length; i++) {
      if (VigenereCipheringMachine.alphabet.indexOf(message[i]) !== -1) {
        n++;
        let symbol = key[n % key.length]
        if (isDecrypt == true) {
          arr.push(VigenereCipheringMachine.alphabet[(VigenereCipheringMachine.alphabet.indexOf(message[i]) + 26 - VigenereCipheringMachine.alphabet.indexOf(symbol)) % 26])
        }
        else {
          arr.push(VigenereCipheringMachine.alphabet[(VigenereCipheringMachine.alphabet.indexOf(message[i]) + VigenereCipheringMachine.alphabet.indexOf(symbol)) % 26])
        }
      } else {
        arr.push(message[i]);
      }
    }
    if (this.isDirect === false) {
      arr = arr.reverse();
    }
    return arr.join('');
  }

  validateArguments(message, key) {
    if (!message || !key) {
      throw new Error('Error');
    }
  }
}

module.exports = VigenereCipheringMachine;
