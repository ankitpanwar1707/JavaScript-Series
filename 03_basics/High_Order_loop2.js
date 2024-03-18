const coding = ['js','ruby','cpp','python','c','java']

// coding.forEach( function (item) {
//     console.log(item);

coding.forEach((item) =>{
    console.log(item);
})

    //Output
    // js
    // ruby
    // cpp
    // python
    // c
    // java
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

//OUTPUT
// js 0 [ 'js', 'ruby', 'cpp', 'python', 'c', 'java' ]
// ruby 1 [ 'js', 'ruby', 'cpp', 'python', 'c', 'java' ]
// cpp 2 [ 'js', 'ruby', 'cpp', 'python', 'c', 'java' ]
// python 3 [ 'js', 'ruby', 'cpp', 'python', 'c', 'java' ]
// c 4 [ 'js', 'ruby', 'cpp', 'python', 'c', 'java' ]
// java 5 [ 'js', 'ruby', 'cpp', 'python', 'c', 'java' ]


const myCoding = [
   { languageName:"javaScript",
     languageFileName:'js'
   },
   {
    languageName:"java",
    languageFileName:'java'
   },
   {
    languageName:"CPP",
     languageFileName:'CPP'
   },
   {
    languageName:"python",
     languageFileName:'py'
   }
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
})

//OUTPUT
// javaScript
// java
// CPP
// python