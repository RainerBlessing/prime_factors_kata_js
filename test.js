"use strict";
var assert = require("assert");
var prime = require("./prime");
var compare = require("./compare");

describe('Compare two arrays by value', function () {
    it('compares two empty arrays', function () {
        assert.ok(compare([], []));
    });
    it('compares empty array and non empty array', function () {
        assert.ok(!compare([], [0]));
    });
    describe('compares arrays with one value', function () {
        it('compares equal array', function () {
            assert.ok(compare([0], [0]));
        });
        it('compares unequal array', function () {
            assert.ok(!compare([0], [1]));
        });
    });
    describe('compares arrays with two values', function () {
        it('compares equal array', function () {
            assert.ok(compare([2, 3], [2, 3]));
        });
        it('compares unequal array', function () {
            assert.ok(!compare([0, 1], [1, 2]));
        });
    });
});

function check_prime(array1, n) {
    var primes = prime(n);
    assert.ok(compare(array1, primes), 'result: ' + array1 + '[' + primes + ']');
}

describe('Prime', function () {
    it('should return empty array', function () {
        check_prime([], 0);
        check_prime([], 1);
    });
    it('should return 2', function () {
        check_prime([2], 2);
    });
    it('should return 3', function () {
        check_prime([3], 3);
    });
    it('prime(4)', function () {
        check_prime([2, 2], 4);
    });
    it('prime(6)', function () {
        check_prime([2, 3], 6);
    });
    it('prime(8)', function () {
        check_prime([2, 2, 2], 8);
    });
    it('prime(9)', function () {
        check_prime([3, 3], 9);
    });
    it('prime(10)', function () {
        check_prime([2, 5], 10);
    });
    it('prime(30)', function () {
        check_prime([2, 3, 5], 30);
    });
    it('prime(37)', function () {
        check_prime([19], 19);
    });
});

