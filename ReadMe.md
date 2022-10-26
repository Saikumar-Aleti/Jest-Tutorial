#####Getting Started with Testing in JavaScript Using Jest
######Unit Testing
Smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.

---

######Jest
Jest is a comprehensive JavaScript testing solution built on top of Jasmine and is maintained by Meta. Jest works out of the box for most JavaScript projects.
Jest is simply a node package and can be installed using any node package manager, npm or yarn.

---

######Command for Installing Jest
**_npm install --save-dev jest_**
This command will install Jest and development dependency. Development dependencies will not installed with **_npm install_** when NODE_ENV is set to production.

---

######Running Jest
To run all the tests in your project, place jest in the **_test_** script in **_package.json_**.
"scripts": {
"test": "jest"
},

---

######Writing Tests with Jest

1. Create a test file, example, **_index.test.js_** to test the contents of **_index.js_**.
2. Import the function you wish to test from **_index.js_**.
3. In order to write a test with Jest, we use a function called test(). The first parameter to this function is a string describing what the test is doing. This string will show up inside the console when run the tests. The second parameter is a function, this function is what gets called to run your tests.
4. Inside the function, we use an inbuilt test function, example, expect(), to test the imported function.

**Example**
const sum=require("./sum");

test("Adding two numbers", ()=>{
expect(sum(1,2)).toBe(3);
})

Jest assertions use matchers to assert on a condition. sum(1,2) is the expectation over here and toBe(3) is the matcher. There are a quite a lot matchers available depending on the expectation.

---

######Cloning an Array
const cloneArray=(array)=>{
return [...array]
}
module.exports=cloneArray;

const cloneArray=require("./cloneArray");

test("Cloning an Array",()=>{
const array=[1,2,3]
expect(cloneArray(array)).toBe(array);
})

This test will because even though the values are same, they are at two different places in memory.

---

######Pass by Value and Pass by Reference
When we assign a primitive data type value to a variable, we are storing the value in the variable.
When we assign an object data type value to a variable, we are storing the address of the value in the variable.
Example Primitive data types (Immutable datum represented directly at the lowest level of the language.) include string, number, boolean, null, undefined and symbol.
Example Object data types (Collections of properties)include arrays, objects, classes.

If we assign a primitive data type variable to a new variable. We are assigning the value stored in the primitive data type variable. Any changes made to the new variable will not affect the original variable as they are two different values in memory.
If we assign an object data type variable to a new variable. We are assigning the addressed stored in the object data type variable. Any changes made to the new variable will affect the original variable as both are sharing the same address.

let a=1; //Storing value 1 directly in variable a.
let b=2; //storing value 2 directly in variable b.
let c=a; //storing value at a directly in variable c.
let c=c+1 // Incrementing the value in c.
console.log("a : "+a); //1
console.log("b : "+b); //2
console.log("c : "+c); //2

let a=[1,2,3]; //Storing address of [1,2,3] in variable a
let b=a; //assigning address at a to b
b.pop();//removes an element from the end of the array
console.log("a : "+a); //[1,2]
console.log("b : "+b); //[1,2]
This is because a, b share the same address.

This can get really confusing when working with array, when we pass an array variable as an argument to a function, we are passing address available at the variable.
Any changes made in the function will affect the original array as they share the same address.

let a=[1,2,3];
let b=[1,2,3];
console.log(a=\==b); //false
console.log(a==b); //false
The address available at a is different from the address available at b. As they are two different arrays, they have two different memory addresses.

---

let array=[1,2,3];

function arrayPush(array, element){
return array.push(element);
}

arrayPush(array,4);

console.log(array); //[1,2,3,4]

---

let array=[1,2,3];

function arrayPush(array,element){
array.push(element);
return [...array] //Here we are declaring a new array with a new address
}

let arr=arrayPush(array,4);

console.log(array); //[1,2,3,4]
console.log(arr); //[1,2,3,4]

console.log(array=\==arr); //false
console.log(array==arr); //false

Const Keyword with Object Data Types
const a=[1,2,3]
const b=a;
b.pop();
console.log(a)//[1,2]
console.log(b)//[1,2]
When using const with object data types, the address cannot change but the value inside the address can change.

######Conclusion
Primitive data types such as string, number, boolean, null, undefined and symbol are pass by value thus the original values cannot be modified and object data types are pass by reference and thus can be modified.

######Pure Functions
Pure functions are the base of functional programming. The idea of a pure function is a function that when given the same inputs always returns the same output. This function must have absolutely no side effects and rely on input variables.

---

Impure Function
let array=[1,2,3];

function arrayPush(array, element){
return array.push(element);
}

arrayPush(array,4);

console.log(array); //[1,2,3,4]

---

Pure Function
let array=[1,2,3];

function arrayPush(array, element){
return [...array,element];
}

let arr=arrayPush(array,4);

console.log(array); //[1,2,3]

---

Pure functions makes it dead simple to unit test. Having a unit tested makes our life so much easier to refractor our code in the future. The major disadvantage of pure functions is that you cannot effect anything outside the function, for example, making changes to database records. Do do this function would need access to the database and that itself invalidates the purpose of pure functions. You'll always have impure functions, but it is always recommended to have as many pure functions as possible.

######Closures
Every scope in JavaScript has access to everything outside of it's scope. For example, a function inside a file (index.js) has access everything outside the function and inside the file.
Closures are a mechanism in JavaScript for handling variable scope.
Example
function outer(outerVariable){
return function inner(innerVariable){
console.log("Outer Variable : "+outerVariable);
console.log("Inner Variable : "+innerVariable);
}
}

const newFunction=outer("outside");
newFunction("inside");

When you have a function defined inside of another function, the inner function has access to variables and scope of the outer function even if the outer function finished executing and variables are no longer accessible in the outer scope.

---

######Advantages of using Jest

1. Zero configuration required.
2. Jest is fast. Jest tests run in parallel – this in turn greatly reduces the test execution time.
3. Isolated and sandboxed tests: Each Jest test runs in its own sandbox, which ensures no two tests can interfere or impact each other.

---

Matchers
Jest assertions use matchers to assert on a condition.
Some of the most commonly used matchers along with Jest tests,
**_Equality_**
test("equality matchers", () => {
expect(2\*2).toBe(4);
expect(4-2).not.toBe(1);
})
**_Truthiness_**
0, null, empty string, NaN, undefined are all examples of falsy w.r.t Javascript.
test("truthy operators", () => {
var name="Software testing help"
var n = null
expect(n).toBeNull()
expect(name).not.toBeNull

// name has a valid value
expect(name).toBeTruthy()

//fail - as null is non success
expect(n).toBeTruthy()

// pass - null treated as false or negative
expect(n).toBeFalsy()

// 0 - treated as false
expect(0).toBeFalsy()
})

**_Number Matchers_**
These matchers could be used for general arithmetic operations.
test("numeric operators", () => {

var num1 = 100;
var num2 = -20;
var num3 = 0;

// greater than
expect(num1).toBeGreaterThan(10)

// less than or equal
expect(num2).toBeLessThanOrEqual(0)

// greater than or equal
expect(num3).toBeGreaterThanOrEqual(0)
})
**_String Matchers_**
A lot of times we need strings to match a regular expression as an assertion in a Unit test. Jest provides matchers for strings to be matched against a regular expression. Jest provides matchers for strings to be matched against a regular expression.
test("string matchers",() => {
var string1 = "software testing help - a great resource for testers"

// test for success match
expect(string1).toMatch(/test/);

// test for failure match
expect(string1).not.toMatch(/abc/)
})

---

######Equalities When Comparing JavaScript Objects
There are two types of equalities in JavaScript when it comes to comparing objects.
Referential equality: Determines whether the two provided operands refer to the same reference.
Deep equality: Determines whether objects are equal by comparing each property in the operands. Referential equality can be determined with equality operators such as strict equality (===) or coercive equality (==) and also by using Object.is() functions.
Syntax for Object.is(parameter1, parameter2)
Use deep-equal library to determine the deep equality for the objects.
npm install deep-equal
const deepEqual=require("deep-equal");

const array1=[1,2,3]
const array2=[1,2,3]

deepEqual(array1,array2);

---

######process.nextTick() setImmediate(),setTimeOut, Promise.then()
Function passed in the process.nextTick() gets executed in the current iteration of the event loop after the current operation ends. This means it will always execute before setImmediate() and setTimeout(). A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.
process.nextTick callback is added to process.nextTick queue. Promise.then() callback is added to promises microtask queue. setTimeout, setImmediate callback is added to macrotask queue.
Event loop executes tasks in the process.nextTick queue first and then executes promises microtasks queue and then macrotasks queue.
