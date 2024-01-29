//Singleton object
const tinderUser = new Object()
tinderUser.id = '123abc',
tinderUser.name = 'Sam',
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email:'someone@gmail.com',
    fullName:{
        userFullName:{
            firstName:"Ankit",
            lastName:"Panwar"
        }
    }
}
console.log(regularUser);

const obj1 = {1:'a',2:'b'}
const obj2= {3:'a',4:'b'}
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);