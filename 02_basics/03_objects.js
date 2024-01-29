// object literals

const mysym= Symbol("key"); //symbol defined

const Jsuser = {
    name:"Ankit Panwar",
    age:21,
    [mysym]:"mykey1", //Output as [Symbol(key)]:'mykey1'
    location:"Dehradun",
    email:"ankitpanwar17072002@gmail.com",
    isLogin:false
}

console.log(Jsuser);
console.log(Jsuser.email);
console.log(Jsuser["email"]);

// Object.freeze(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting());

Jsuser.greeting2 =function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(Jsuser.greeting2());