const myNums = [1,2,3,4,5,6,7,8,9,10] 

// const newNums = myNums.filter( (num) => num>4)         (Method 1)
//     console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const newNums = myNums.filter( (num) => {
    return num>4          // (Method 2)
})
    console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
 
console.log("**********************************************");

myNums.forEach( (num) =>{            // Using for each loop
    if(num > 4)
    {
        myNums.push(num)
    }
})
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

console.log("*******************************************");


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks);

userBooks = books.filter( (bk) =>
 {
     return bk.publish >= 1995 && bk.genre ==="History"
    })

console.log(userBooks);


console.log('**************************************');

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNNum=myNumber.map( (num) => num + 10)

console.log(newNNum);


//Chainning

const newwNum = myNumber
                   .map ( (num) => num * 10 )
                   .map( (num) => num + 1 )
                   .filter( (num) => num >= 40)

console.log(newwNum);


// Reduce

// javaScript: Array.reduce()

// const array1 =[1,2,3,4];

// const initialValue = 0;
// const sumWithInitial = array.reduce( 
//     (accumulator, currentValue) => accumulator + currentValue, initialValue
// );

// console.log(sumWithInitial);

// Expected output: 10



