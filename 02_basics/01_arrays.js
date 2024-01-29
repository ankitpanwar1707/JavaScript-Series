const myArr = [0,1,2,3,4,5,6];
const myHeores =["Shaktimaan","Batman","Spiderman"];

console.log(myArr[1]);
console.log(myHeores[2]);

//Array methods

myArr.push(99,78); //Add elements in the array
console.log(myArr);
myArr.pop(); //popping the single elements from array 
console.log(myArr);

myArr.unshift(45); //Adding the elements in the array in beginning 
console.log(myArr);

myArr.shift(); //popping the single element from beginning
console.log(myArr);

console.log(myArr.includes(10)); //Checking the element in the array

console.log(myArr.indexOf(65));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr,typeof newArr); //string


// slice , splice (Important Topic)

console.log("A ",myArr); // [0,1,2,3,4,5,6,99]

const myn1= myArr.slice(1,3);
console.log(myn1); //[1,2]
console.log("B",myArr);// [0,1,2,3,4,5,6,99]

const myn2 = myArr.splice(1,3); //Original array manipulate
console.log("C",myArr); //[0,4,5,6,99]
console.log(myn2); //[1,2,3]