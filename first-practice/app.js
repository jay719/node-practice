const validator = require('validator')

const addition = require ('./utilities.js')

const message = require('./notes.js')

const sum = addition(4,-2)

const notes = message()

console.log(notes,sum)

console.log(validator.isURL('https://mead.i'))