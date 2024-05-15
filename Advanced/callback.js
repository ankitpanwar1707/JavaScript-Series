//callback

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
};

calculator(1,2,sum);

//callback hell

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
};

getData(1,()=>{
    console.log("getting data2 .....");
    getData(2,()=>{
        console.log("getting data2 .....");
        getData(3,()=>{
            console.log("getting data2 .....");
            getData(4);
        });
    });
});



