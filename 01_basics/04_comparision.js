console.log("2">1); //true
console.log("02">1);  //true

console.log(null>0); //false
console.log(null == 0); //false
console.log(null >=0);//true
console.log(null === 0);//false

console.log(undefined == 0); //false
console.log(undefined === 0);//false
console.log(undefined >= 0);//false


// ***************************************************************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYouTubeName = "Ankit Panwar";

let anotherName = myYouTubeName;
anotherName = "Panwar Ankit"

console.log(myYouTubeName);
console.log(anotherName);

let userOne= {
    name : "Ankit Panwar",
    email: "ankitpanwar17072002@gmail.com",
};

console.log(userOne);// { name: 'Ankit Panwar', email: 'ankitpanwar17072002@gmail.com' }

let userTwo = userOne;

userTwo.email = "Ankit@google.com";

console.log(userOne.email);// Ankit@google.com
console.log(userTwo.email);//Ankit@google.com

//Stack gives the copy of value,if value changed is done only reflect in changed variable. 
//Heap gives the actual value,if value changed is done reflect in both variables.

