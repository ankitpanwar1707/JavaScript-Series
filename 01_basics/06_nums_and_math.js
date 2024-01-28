const score = 400;

const balance  = new Number(100);

console.log(score);//400
console.log(typeof score);//number
console.log(balance);// [Number: 100]
console.log(typeof balance);// object
const str = console.log(balance.toString());
console.log(str,typeof str);// undefined undefined

console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.6849;

console.log(otherNumber.toPrecision(3));//124

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(typeof Math); //object

console.log(Math.abs(-17));//17

console.log(Math.round(4.6));// 5

console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1)) + min);