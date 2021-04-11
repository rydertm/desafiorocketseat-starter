function getFlagValue(flag) {
    for(var c = 0; c < process.argv.length; c++) {
        if (process.argv[c] === flag) {
            return process.argv[c + 1];
        }
    }
}

module.exports = getFlagValue;