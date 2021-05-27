const validator = require('validator')

const addition = require ('./utilities.js')

const message = require('./notes.js')

const sum = addition(4,-2)

const notes = message

console.log(message)

console.log(validator.isEmail('andrew@example.com'))