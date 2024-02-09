let a=8
{
    console.log(a);//8
}


{
let b=10
}

// console.log(b);//Error


// ***********************************Hoisting ***********************************************************

// Hoisting refers to the process whereby the interpreter appers to more the declaration to the top of the code
// before execution

// greet()
let greet= () => {
    console.log("Good Morning");
}


//hoist declarations, not initialization



//**************************************************Closures ***************************************

// message= "Good Morning Guys!"
// function hello(){
//     // message= "Good Morning"
//     console.log("Hello 1"+message); //Hello 1Good Morning Guys!
// }
// hello()



message= "Good Morning Guys!"
function hello(){
    message= "Good Morning"
    console.log("Hello 1"+message); //Hello 1Good Morning
}
hello()
