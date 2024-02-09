const user={
    username:"Ankit",
    price:999,

    welcomeMessage:function(){
       console.log(`${this.username},welcome to website`); //This refers the current context and this only user in objects not for function
       console.log(this); //return current context
    }
}
user.welcomeMessage()// Ankit,welcome to website
 user.username='Sam'
user.welcomeMessage(); // Sam,welcome to website


function javaScript(){
    console.log(this); //Return global values
}

javaScript()

//*******************************************************Arrow Function***********************************

const javaScript1 = () =>{
      let username = "Ankit";
      console.log(this.username); //undefined
}
javaScript1()


const addTwo = (num1,num2) =>{
    return num1+num2;
}

console.log(addTwo(23,24));// 47


// const addTwo = (num1,num2) => (num1+num2)  Majorly used in  react





