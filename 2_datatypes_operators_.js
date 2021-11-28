//____________________________________________Ways to Print in Javascript________________________________________

console.log("Hello World");
// alert("me")
// document.write("This is document write")


//_______________________________________________Javascript Console API__________________________________________

console.log("Hello World");
console.warn("This is warning")
console.error("This is an error");
console.clear()

//________________________________________________Javascript Variables___________________________________________ 

var num1 = 54;
var num2 = 36;
console.log(num1 + num2);

/*_______________________________________________Datatypes in Javascript_________________________________________

    There are 2 types of datatypes in javascript
    1. Primitive datatypes : undefined, null, number, string, boolean, Symbol
    2. Reference datatypes : array and objects */  

// Numbers
var n1 = 21;
var n2 = 3;
console.log(n1);

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    ravi : 80,
    shumbham : 74,
    ayush : 98
}

// Boolean
var a = true;
var b = false;
console.log(a, b)

// undefined and null difference
var und;
console.log(und);

var n = null;
console.log(n);

// Arrays
var arr = [1,2,"ayush", 3, 4, 5, "tiwari"]
console.log(arr)

//___________________________________________________Operators_________________________________________________

// Arithematic Operators
var a = 25;
var b = 45;
console.log("The value of a+b is ", a+b);
console.log("The value of a-b is ", a-b);
console.log("The value of a*b is ", a*b);
console.log("The value of a/b is ", a/b);

// Assignment Operators
var c = b;
console.log("The value of c += 10 is ", c+=10);
console.log("The value of c -= 10 is ", c-=10);
console.log("The value of c *= 10 is ", c*=10);
console.log("The value of c /= 10 is ", c/=10);

// Comparison Operators
var x = 34;
var y = 51;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);

// Logical Operators

// Logical AND 
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

// Logical OR
// console.log(true !! true);
// console.log(true !! false);
// console.log(false !! false);
// console.log(false !! true);

// Logical NOT
console.log(!true)
console.log(!false)