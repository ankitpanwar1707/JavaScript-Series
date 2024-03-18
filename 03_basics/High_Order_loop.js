const arr = [1,2,3,4,5]

//for of loop

// for(const iterator of object)

for(const num of arr){
    console.log(num);
}


const greeting = "Hello World"

for(const greet of greeting){
    console.log(`Each char is ${greet}`);
}


//Maps objects are collections of key-value pairs.A key in the Map may only occur once; it is unique in the Map's Collection.

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')

console.log(map);

//OUTPUT

// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'FR' => 'France'
//   }


for (const [key,value] of map) {

    console.log(key,':-',value);

    // OUTPUT

// IN :- India
// USA :- United States of America
// FR :- France
    
}

const myObject = {
    'game':'NFS',
    'game2':'Spiderman'
}

// for(const print of myObject)
// {
//     console.log(print); //Getting error in this syntax ,object is called by this method.
// }

