let myDate = new Date();
console.log(myDate); //2024-01-28T03:17:40.985Z

console.log(myDate.toString()); //Sun Jan 28 2024 08:49:04 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sun Jan 28 2024
console.log(myDate.toISOString()); //2024-01-28T03:22:15.294Z
console.log(myDate.toLocaleDateString());// 28/1/2024
console.log(myDate.toLocaleString()); //28/1/2024, 8.52.15 am
console.log(myDate.toJSON()); //2024-01-28T03:22:15.294Z

console.log(typeof myDate); //object

let myCreatedDate = new Date(2024,6,17);
console.log(myCreatedDate.toLocaleDateString()); //17/7/2024
console.log(myCreatedDate.toDateString());
