const myObject ={
    js:'Javascript',
    cpp:'C++',
    rg:'ruby',
    py:'Pyhton'
}

// for in loop

for (const key in myObject) {
    console.log(key);

//Output(Acutal printing keys in array)

// js
// cpp
// rg
// py
        
    }

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);

    //OUTPUT
    // js shortcut is for Javascript
    // cpp shortcut is for C++
    // rg shortcut is for ruby
    // py shortcut is for Pyhton
}


const programming = ['js','cpp','py','rb']

for(const key in programming)
{
    console.log(key);

    //OUTPUT (Actual printing keys of array)
    // 0
    // 1
    // 2
    // 3
}

for(const key in programming){
    console.log(`key ${key} and value is ${programming[key]} `);

    //Output
    // key 0 and value is js
    // key 1 and value is cpp
    // key 2 and value is py
    // key 3 and value is rb
}


//Map are non-iterative elements in js.