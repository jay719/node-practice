const fs = require ('fs')
fs.writeFileSync('notes.txt', 'I live in Colorado') 

fs.appendFileSync('notes.txt', ' My name is javaria')