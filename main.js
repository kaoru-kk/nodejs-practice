console.log('hello world!');

console.log(process.argv);

// $ node main.js one two three four a

// output↓
// [
//   '/Users/peco/.nvm/versions/node/v12.19.0/bin/node',
//   '/Users/peco/program/nodejs-practice/main.js',
//   'one',
//   'two',
//   'three',
//   'four',
//   'a'
// ]

// use module
const myModule = require('./my_module');
console.log(myModule.foo);

// commander 
// 引数を出力する方法
const program = require('commander');
program.parse(process.argv);

const filePath = program.args[1];

// $ node main.js ./sample.md two-argv
console.log(filePath);