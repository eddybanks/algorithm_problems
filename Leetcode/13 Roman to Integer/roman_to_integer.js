/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman_values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let int_value = 0

    for(let i = 0; i < s.length; i++) {
        int_value += roman_values[s[i]]
    }
    return int_value
};

const a = 'III'
const b = 'IV'
const c = 'IX'
const d = 'LVIII'
const e = 'MCMXCIV'

let value = romanToInt(a)
console.log(value)