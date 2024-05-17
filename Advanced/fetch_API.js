const URL = "https://cat-fact.herokuapp.com/facts";

// Using fetchAPI

const getFacts = async () => {
  console.log("getting data .....");
  let response = await fetch(URL);
  console.log(response);
  let data =  await response.json();
  console.log(data);
};
getFacts();


// Promise Chaining

// function getFacts(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     });
// };

// getFacts();
