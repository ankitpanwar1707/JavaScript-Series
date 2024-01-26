let score = "33";

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// '33' => 33
// "33abc" => NaN
// true => 1; false =>0;

let isLogged = 1;
let booleanIsLogged = Boolean(isLogged);
console.log(booleanIsLogged);

//1 => true ; 0=> false;
//"" =>false;
//"Ankit" => true;

let someNumber =33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


// *********************************** Operation *******************************************************

let value = 3;
let negvalue = -value;
console.log(negvalue);

let str1="Ankit";
let str2 = "Panwar";
 let str3 =str1+str2;
 console.log(str3);


 console.log("1" +2); //12
 console.log(1+ "2"); //12
 console.log("1"+2+2); //122
 console.log(1+2+"2");//32

 console.log(+true);//1

 let gameCounter=100;
++gameCounter;
console.log(gameCounter);//101