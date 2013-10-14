module.exports = function compare(array1, array2) {
    var equal;
    var i;

    equal = array1.length === 0 && array2.length === 0;

    if (equal === false) {
        for (i = 0; i < array1.length; i++) {
            equal = array1[i] === array2[i];
        }
    }

    return equal;
};
