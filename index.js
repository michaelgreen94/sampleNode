var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  let x = 1
  let a = 0
  let b = 0
  for (let i = 0; i <= line.length; i++) {
    let origInput = line
    let numToChar = origInput.toString()
    numToChar = numToChar.replace(/4/g, '3')
    a = parseInt(numToChar)
    b = parseInt(origInput) - a
  }
  console.log(`Case:${x}: ${a} ${b}`)
  x++
}).on('close', () => {
  process.exit(0)
})