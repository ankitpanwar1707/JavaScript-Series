const marvel_heros = ["Thor","Ironman","Spiderman"];
const dc_heros = ["Superman","Flash","Batman"];

marvel_heros.push(dc_heros); //["Thor","Ironman","Spiderman"["Superman","Flash","Batman"]]

console.log(marvel_heros);
console.log(marvel_heros[3][2]); //Batman

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); //["Thor","Ironman","Spiderman","Superman","Flash","Batman"]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Ankit")); //false
console.log(Array.from("Ankit"));// ['A','n','k','i','t']
console.log(Array.from({name:"Ankit"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));