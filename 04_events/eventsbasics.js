// First Method:

let btn1 = document.getElementById('btn1');
btn1.onclick = function(){
    alert('button clicked');
};

// Second Method:

document.getElementById('btn2').addEventListener('click',function(e){
    alert("button clicked by second method.")
    console.log(e);
}, false)

// Have to study
//type,timestamp,defaultPrevented
//target,toElement, srcElement, currentTarget,
// clientX, clientY, screenX , screenY
//altkey, ctrlkey, shiftkey, keyCode

