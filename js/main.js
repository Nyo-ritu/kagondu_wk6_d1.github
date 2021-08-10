//Basics of Javascript

/* 

    Multiline comment syntax
    --variable declaration in JS --
    Primitive Types: Strings, Integers, Floats, Boolean, Arrays, Objects (dictionaries)
    Functions in JS
    Looping / Conditional Statements in JS


*/

// String variable

var name_1 = 'Joel' // let name_1 or const name_1

console.log(name_1)

// difference between var, const, let -- mostly scope
 /*

 var keyword is used to instatiate a global variable anywhere on the page
 let keyword is used to instatiate block bound variable inside an object, loop, function, etc
 const is exactly the same as let, but does not allow the value stored to change

 */
// let name_2 = 'coding temple'
// name_2 = 'nate w'
// console.log(name_2)


// Integer variable
let some_number = 80;
console.log(some_number)

// float variable

let some_float = 3.14;
console.log(some_float)

// Array variable
let some_array = [1,2,3,4,5,6,]
console.log(some_array)

//Object Variable
var some_object = {'test': 'Here is our first object!'}
console.log(some_object)


//JS Hoisting example
console.log(some_new_str)
var some_new_str = 'this is a new string'

console.log(some_new_str)


var first_name;
var last_name;



first_name = 'Kagondu';
last_name = 'Wai'
console.log(first_name +' ' + last_name)
console.log(first_name)
console.log(last_name)

// let or const is a better way of declaring a variable

let new_string = '1234coding temple';
const other_string = 'coding is fun';

let sum = 5+5;
console.log(sum);
console.log(5+5)

//subtractions
let diff = 10 - 5; //decrementation -=5
console.log(diff)


//multiplication
let prod = 5*5; //increment *=5
console.log(prod)

// division
let div = 5/5 // decrement /=5
console.log(div)

// exponential
let square = 5**2 // incement **2
console.log(square)


//ceiling and floor
let find_ceil = Math.ceil(25.8)
console.log(find_ceil)

let find_floor = Math.floor(25.8)
console.log(find_floor)

// Modulo(remainder) same as python
console.log(10%2)

//Mindbender 1

let this_var = some_float + '4'
console.log(this_var)
//becomes '3.14' + '4'  returns 3.144 be careful

//Mindbender 2

let another_var = some_float + parseFloat('4')
console.log(another_var)
// returns 7.140000000000001   turns 4 into a float

// variable redeclaration using let

let nfl_goat = 'Tom Brady';
console.log(nfl_goat)

nfl_goat = 'Peyton Manning';
console.log(nfl_goat)

// let nfl_goat = 'Eli'; bad redeclaration will cause syntax error

/*
    ===Javascript Functions ===
*/

// Regular named function (no parameters)
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}


// Calling the function
console.log(addNums())

// function with 2 params
function addNums2(num, num2){
    return num + num2
};

console.log(addNums2(10,12))


//defining function as a variable
let addNums3 = function(num, num2){
    return num + num2
}

console.log(addNums3(4,4))


// ES6+ Arrow function syntax

let multiplyNums = () => {
    let num = 4;
    let num2 = 5;
    return num*num2;
}
console.log(multiplyNums())

/*
    ES6 Syntax with params
    Single Parameter does not need parentheses -- multiple params do need parentheses
*/


let cubed = (num) => {
    return num ** 3
}

let cubed2 = num => {
    return num **3
}

console.log(cubed(3))

console.log(cubed2(3))

let doubleNum = (num1, num2) => {
    return (num1*2) + (num2 * 2)
};
console.log(doubleNum(10,2))

// JS Closure
// Self-Invoking function

console.log((function(name){
    let hello = 'Hello World ' + name;
    return hello
})('Nate'))

// Javascript Control Flow

// If Conditional statements

let determineAge = (age) => {
    if (age < 18) {
        return 'Minor'
    } else if (age >= 18 && age <= 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
};

console.log(determineAge(50))

// OR keyword ||

let determineAge2 = (age) => {
    if (age < 18) {
        return 'Minor'
    } else if (age >= 18 || age <= 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
};
console.log(determineAge(45))


// Ternary Operators
// Syntax:
//Condition ? <value to return> : <another condition (else if)> ? <next value to return>: <else block value>

let determineAge3 = (age) => {
    return ( age <18)? 'Minor':(age >= 18 && age <= 65) ? 'Adult' : 'Senior'
}

console.log(determineAge3(50))

// for loop in Javascript
// for loop syntax --- for (keyword) (counter; condition)

let countByOne = () =>{
    // for loop
    for(let i = 0; i <20; i++){
        console.log(i)
    }
    return 'The counting has stopped'
}

console.log(countByOne())


let decreaseByOne = () =>{
    // for loop
    for(let i = 20; i >0; i--){
        console.log(i)
    }
    return 'The counting has stopped'
}

console.log(decreaseByOne())



// while loop - Javascript

let countWithWhile = () => {
    let i = 0; // Counter
    let text = '';
    while(i < 10) {
        text += `This number is....${i} \n`
        i++
    }
    return text
}

console.log(countWithWhile())

// do while in JS

let countwithdowhile = () => {
    let i = 0; // counter
    let text = ''

    //do
    do{
        text += `This number is ${i} \n`
        i++
    }
    while (i < 10)
    return text
}

console.log(countwithdowhile())

/*
JS Arrays: looping, methods, array string methods
*/

// Create a new array group of names
let group_of_names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty']

// Grab a value by index

console.log(group_of_names[0]) // Terry

// Deconstruction of an array

var terry, ben, ash;
[terry, ben, ash] = group_of_names
// terry = group_of_names[0]
// ben = group_of_names[2]
// ash = group_of_names[3]

console.log(terry, ben, ash)
console.log(group_of_names)

// method #1 most common for looping through arrays

let showNames = () => {
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'done with list'
}

console.log(showNames())

// method #2 for looping (forEach())
group_of_names.forEach(
    num => console.log(num)
)

// JS array method: Array.toString()
console.log(group_of_names.toString())

//typecheck
console.log(typeof(group_of_names.toString()))

// javascript array methods: .map(), .filter(), .reduce()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    } else{
    return 'not B name'
    }
})
console.log(b_names)

//long form of .map()    python 'append' is js 'push'
let b_names2 = () => {
    let new_array = []
    for (let i = 0; i < group_of_names.length;i++){
        if (group_of_names[i][0] == 'B'){
            new_array.push(group_of_names[i])
        }
    }
    return new_array
}

console.log(b_names2())

// .reduce(),
const nums = [2,4,6,8,10]
let nums_reduce = nums.reduce( (accumulater, current_num) =>{
    return accumulater + current_num
});

// long version
let counter = 0
for(let i = 0; i< nums.length; i++){
    counter += nums[i]
}
console.log(counter)

// .filter()
let b_names3 = group_of_names.filter( element => element[0] == 'B')
console.log(b_names3)

// Array methods with string values: .join(), slice(), .search(), .splice()

console.log(group_of_names.join(', '))
console.log(group_of_names.slice(0,3)) // group of names[0:3]

// .splice()
let captured_val = group_of_names.splice(0, 1, 'freddie')
console.log(`this value was removed from the list ${captured_val}`)
console.log(group_of_names)


// hw2
let replaceGoku = (a_list) => {
    for (let i = 0; i < a_list.length; i++){
        if (i % 2 == 0){
            a_list.splice(i, 1, 'Goku')
        }
    }
    return a_list
}
console.log(replaceGoku(group_of_names))

// using .search() and .slice() on arrray values that are strings
console.log(group_of_names[0].search('G'))

// string.slice()
console.log(group_of_names[1].slice(0,3))

/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// let findWords = (dog_string, dog_names) =>{
//     if (dog_string.includes(dog_names))
//         return 'Matched dog_name'
//     else;
//         return 'No matches'
    
// }

// console.log(findWords)


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = (dog_names, dog_string) =>{
    for (i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            return 'Matched dog_name'
        }
    }
    return "No Matches"
}
console.log(findWords(dog_names, dog_string))

/*Write a fucntion that takes in an array and removes every value that's double is over 50.

*/

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...


given_arr = [13, 22, 26, 40, 1, 10]
let replaceEvens = (arr) =>{
    let new_arr = []
    for (i = 0; i < arr.length; i++){
        if (arr[i]*2 < 50){
        new_arr.push(arr[i])
        }
    }
    return new_arr
}
console.log(replaceEvens(given_arr))


// CodeWars Q1. Return the opposite of a number

// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

function opposite(number) {
    return(-number);
  }


  // Codewars Q2. Return the negative if not already negative

  //https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

  function makeNegative(num) {
    if (num > 0) {
      num = -num;
  }
    return num
  }

  // Codewars Q3. Return first and last character

  //https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

  function removeChar(str){
    return str.slice(1,-1)
   
   };
   
// Codewars Q4 Reverse String

//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
    return str.split('').reverse().join('');  
  }