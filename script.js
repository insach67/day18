//  == vs === ?
// The main difference is that == compares variables by making type coercion (conversion), === checks for the type as well, if types are not the same it returns false

// console.log(5 == '5') // true, because the '5' is being converted into 5
// console.log(5 === '5') // true, because the '5' is being converted into 5


// -------Difference between null and Undefined ?

// var n; //variable decleration
// console.log(n)

//Undefined means we have declared a variable but have not yet assigned a value to that variable.

// null is an assignment value. null can be assigned to a variable as a representation of 'no value'
// var n = null
// console.log(n)

// console.log(typeof (undefined)) //undefined
// console.log(typeof (null)) //object

// What is not defined ?
// When you try to access a variable which does not exist in the program or is not declared, then you encounter a runtime error which is a 'reference error' that means that variable is not defined.
// console.log(b)// --> reference error

// How is a JS program executed ?
// var a = 10;
// console.log(a)

// parser, interpretation
// -----Steps
// 1. Create a global execution context. (push GEC in the call stack)
// 2. Memory phase
// 3. variable and function definition are stored in the Memory creation phase, value of variables will be undefined.

// 4. Code Execution phase
// 5. We execute the program line by line.

// Note - If a function call (execution) is encountered, then we create a function execution context and we push it into the call stack. This execution context also has the memory phase and the code execution phase.

// Execution context - is an abstract concept that holds information about the environment where the current code is being executed.

//-------What is Hoisting ?

// function hello() {
//     console.log('hi')
// }
// hello()

// function hello() {
//     console.log('hi')
// }
// Hoisiting referes to the process where the interpreter "APPEARS" to move the declaration of functions, variables to the top of their scope, prior to execution of the code.

// Hoisting allows functions to be safely used in code before they are declared

// What are anonymous functions
// Functions without name are anonymous functions



// a() //
// // console.log(a)

// var a = function () {
//     console.log('hi')
// }

// console.log(a)

// a()
// var a = () => {
//     console.log('hi')
// }

// Arrow functions are NOT hoisted

// What is scope ?
// A scope is where a variable is accessible



