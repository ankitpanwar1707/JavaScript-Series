function sayMyName(){
console.log("A");
console.log("N");
console.log("K");
console.log("I");
console.log("T");
}

sayMyName()

// function addTwoNumber(number1,number2)
// {
//    console.log(number1+number2);
// }
// const result=addTwoNumber(3,4)
// console.log(result); // undefined

function addTwoNumber(number1,number2){
    let result = number1+number2;
    return result;
}
console.log(addTwoNumber(3,5));




function loginuserMessage(username){
    if(!username)
    {
        console.log("please enter a username");
        return 

    }
    return `${username} just logged in`;
}

console.log(loginuserMessage(""));



function calculateCartPrice(...num1){ //... rest operator
           return num1;
}
console.log(calculateCartPrice(2,4,6,3,5,3)); //[2,4,6,3,5,3]

//function with object

const user ={
    username:"Ankit",
    price:199
}

function handleObject(anyobject){
    console.log(`Username ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

//function with array

const myArr= [200,300,400];

function returnSecondValue(getArray){
    return getArray;
}
console.log(returnSecondValue(myArr));