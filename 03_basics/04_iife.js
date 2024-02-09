// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log('DB CONNECTED');
})(); //IIFE used for reduce the global scope polution

((name) =>{
    console.log(`DB RECONNECTED ${name}`);
})("Ankit");

//In IIFE we need to mark semicolon ; explcitly for exuction end


