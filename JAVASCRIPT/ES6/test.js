const chalk = require('chalk');
function out(a){
  console.log(a)
}
function outError(a){
  console.log(chalk.red(a))
}
function outSuccess(a){
  console.log(chalk.green(a))
}

// let a = new Set(['a', 'a', 'b', 'c'])
// a.forEach(item => {
//   outSuccess(item)
// })
// out(a)
// out([...a].join(''))
// let [ flag = true ] = [1]
// out(flag)
