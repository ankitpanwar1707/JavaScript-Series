const account_Id=1707;
let accountEmail = "ankitpanwar17072002@gmail.com";
var accountPassword = "12433";
accountCity = "Dehradun";
let accountState;

// account_Id=2;  //Not allowed

console.log(account_Id);  

accountEmail="ankitpanwar2326@gmail.com";
accountPassword = '1243212';
accountCity = "Bengaluru";
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountEmail,accountPassword,accountCity,accountState]);