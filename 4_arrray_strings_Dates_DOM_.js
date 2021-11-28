//____________________________________________Arrays___________________________________________

let myArr = ["Fan", "Camera", 34, null, true];

// Array Methods
console.log(myArr.length);
myArr.pop();
myArr.push("Ayush");
myArr.shift()
const newLen = myArr.unshift("harry")
console.log(newLen)
console.log(myArr);

// Other Methods
myArr.toString()
myArr.sort()
console.log(myArr);


//______________________________________String Methods_________________________________________

let myStr = "ayush is a good boy and now he is placed in Google";
console.log(myStr.length)
console.log(myStr.indexOf("a"))
console.log(myStr.lastIndexOf("is"))

console.log(myStr.slice(0,7))
console.log(myStr.replace("good", "cool"));


//____________________________________Dates in javascript______________________________________

let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getMonth());
console.log(myDate.getHours());

//______________________________________DOM Manipulation_______________________________________

let elem = document.getElementById('click');
console.log(elem);
let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[1].classList.add("text-success")

let tn = document.getElementsByTagName("div");
console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "This is a created paragraph";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

//____________________________________Selecting using Query______________________________________

sel = document.querySelector('.container')
console.log(sel)

sel2 = document.querySelectorAll('.container')
console.log(sel2)
