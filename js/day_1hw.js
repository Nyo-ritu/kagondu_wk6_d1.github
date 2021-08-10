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