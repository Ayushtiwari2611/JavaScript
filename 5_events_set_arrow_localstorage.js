//______________________________________________Events_________________________________________________

function clicked(){
// console.log("This button was clicked")
}
window.onload = function(){
    // console.log("The document was loaded")
}
firstcontainer.addEventListener('click',function(){
    // console.log("Click on Container")
})
firstcontainer.addEventListener('mouseover',function(){
    // console.log("Mouse on Container")
})
firstcontainer.addEventListener('mouseout',function(){
    // console.log("Mouse-out on Container")
})
let previousHTML = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML = previousHTML;
    // console.log("Mouse-up on Container")
})
firstcontainer.addEventListener('mousedown',function(){
    // console.log("Mouse-down on Container")
})


//_________________________________________Arrow Functions______________________________________________

// function summ(a,b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set Interval Fired</b>"
    console.log("I am your log")
}
//____________________________________setTimeout and setInterval________________________________________

// setTimeout(logKaro, 2000);
// setInterval(logKaro, 2000);

// clr = setInterval(logKaro, 2000);
// Use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


