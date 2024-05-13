let a=8
{
    console.log(a);//8
}


{
let b=10
}

// console.log(b);//Error


// ***********************************Hoisting ***********************************************************

// Hoisting refers to the process in which we call function or varible before declaration and definition.

// Function Definition and Function Declaration

hi()

function hi(){
    console.log('Hello'); //Output:Hello   
}

sayHi()

//Function Definition and Function Expression

var sayHi = function(){
    console.log('Hiii'); //Output: Getting Error or undefined,because in the Function Expression form (sayHi) treat as a varible . If we use "var" for defined function getting undefined or if use "let or const" for defined function getting error. 
}



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
