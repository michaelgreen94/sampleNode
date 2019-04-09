// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
// let firstLine = false

// rl.on('line', (line) => {
//   let input = 0
//   if (firstLine) {
//     let x = 1
//     // for (let i = 0; i <= input; i++) {
//     // console.log('4', input)
//     let origInput = parseInt(line)
//     let numToChar = origInput.toString()
//     numToChar = numToChar.replace(/4/g, '3')
//     let a = parseInt(numToChar)
//     let b = origInput - a
//     console.log(`Case:${x}: ${a} ${b}`)
//     x++
//     // }
//   } else {
//     firstLine = true
//     input = parseInt(line)
//     // console.log(input)
//   }
// }).on('close', () => {
//   process.exit(0)
// })

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var firstLine = true
var testCases = 0
let x = 0

rl.on('line', (line) => {
  let a = 0
  let b = 0
  if (!firstLine && testCases > 0) {
    // console.log("remaining: " + testCases)
    // console.log("first line: " + firstLine)
    let origInput = line
    let numToChar = origInput.toString()
    numToChar = numToChar.replace(/4/g, '3')
    a = parseInt(numToChar)
    b = parseInt(origInput) - a
    x++
    testCases--
    console.log(`Case#${x}: ${a} ${b}`)
    if (testCases == 0 && !firstLine) {
      process.exit(0)
    }
  } else if (firstLine) {
    testCases = parseInt(line)
    firstLine = false
  }


}).on('close', () => {
  process.exit(0)
})