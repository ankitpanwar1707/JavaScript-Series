//Promise: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resultng value.

//promise has three states - pending,fulfilled,rejected
//promise has two handler - resolve,reject

const getPromise = ()=>{
    return new Promise((resolve,reject) =>{
        console.log("I am a promise");
        resolve("success");
        //reject("error");
    });
};

let promise = getPromise();
promise.then(()=>{
    console.log("promise fulfilled");
});

promise.catch((err)=>{
    console.log('rejected',err);
});