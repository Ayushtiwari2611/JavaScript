//_______________________________________Functions in Javascript________________________________________

function avg(a, b){
    c = (a+b)/2;
    return c;
}
// DRY = Do not Repaeat yourself
c1 = avg(8,11);
c2 = avg(54, 33);
console.log(c1, c2);

//________________________________________Conditional Statements________________________________________ 

var age = 41;
// Simple if statement
if(age>18){
    console.log("You can drink whisky");
}
// if else statement
if(age>18){
    console.log("You can drink whisky");
}
else{
    console.log("You can not drink whisky")
}

//_____________________________________________if else ladder___________________________________________

if (age>32){
    console.log("You are not a kid");
}
else if(age>26){
    console.log("Bachhe nahi rahe");
}
else if(age>22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age>18){
    console.log("18 bachhe nahi rahe");
}
else{
    console.log("bachhe nahi");
}
console.log("End of ladder");

//_________________________________________________Loops________________________________________________

var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i=0 ; i<arr.length ; i++){
    console.log(arr[i])
}

arr.forEach(function(element){
    console.log(element)
})

let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}
do{console.log(arr[j]);
    j++;
}while(j<arr.length);

//________________________________________Break and Continue Statement___________________________________

var arr = [1,2,3,4,5,6,7];
for(var p=0 ; p<arr.length ; p++){
    if(p==2){
        break;
        // continue;
    }
    console.log(arr[p])
}