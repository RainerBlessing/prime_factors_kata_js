var compare = require("./compare");

Array.prototype.extend = function (array) {
    if (array.length < 150000) {
        this.push.apply(this, array)
    } else {
        for (var i = 0, len = array.length; i < len; ++i) {
            this.push(array[i]);
        }
    }
};

module.exports = function prime(n, p) {
    var primes = [];
    if (n >= 2) {
        if (typeof p === 'undefined') p = 2;
        if (n == p)
            return [n];
        do {
            if (n % p === 0) {
                n = n / p;
                primes.push(p);
                primes.extend(prime(n, p));
            } else {
                primes.extend(prime(n, ++p));
            }
        } while (!compare(prime(n, p), [n]))
    }
    return primes;
};
