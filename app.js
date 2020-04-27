let identity = require('./src/identity.js');
let validate = require('./src/validate')

let condition_1 = validate.greaterThan(identity.name, 5) && validate.alphaNumeric(identity.name);
let condition_2 = validate.minLength(identity.password, 8);

console.log('condition 1 : ', condition_1);
console.log('condition 2 : ', condition_2);