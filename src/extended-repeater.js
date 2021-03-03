const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let partOfString = '';
    if ('addition' in options) {
        partOfString = Array(options.additionRepeatTimes)
            .fill(String(options.addition))
            .join((options.additionSeparator)
                ? options.additionSeparator
                : '|');
    }
    return Array(options.repeatTimes)
        .fill(String(str) + partOfString)
        .join((options.separator)
            ? options.separator
            : '+');
};
