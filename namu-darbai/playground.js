/* function enough(cap, on, wait) {
  const emptySpace = cap - on;
  if ((wait - emptySpace) <= 0) {
      return 0;
  } else ((emptySpace - wait) > 0); {
      return Math.abs (wait - emptySpace);}}
 */



/* function enough(cap, on, wait) {
  const emptySpace = cap - on;
  const ats = (((emptySpace - wait) <= emptySpace)? 0: (emptySpace - wait);
  return ats;
} */

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);

function enough(cap, on, wait) {
  const emptySpace = cap - on;
  const ats = (((wait - emptySpace) < 0)? 0: (wait - emptySpace)
  )
  return (ats);
}

console.log('------count-same-value-intems---');

function countSheeps(arrayOfSheep) {
    let count = 0;
  for (let index = 0; index < arrayOfSheep.length; index++) { if (arrayOfSheep[index] === true) 
    { count++;}} 
  return count;
  //console.log(count);
}


console.log(countSheeps ([true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ]));

/* const arrayOfSheep = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true, false, true ];

let count = 0;
  for (let index = 0; index < arrayOfSheep.length; index++) { if (arrayOfSheep[index] === true) { count++;
  }}
console.log(count); */

/* function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}
 

console.log(countSheeps ([
true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true ])); */
console.log('------insert missing number----------');

function pipeFix(numbers){
const max = Math.max(...numbers);
const min = Math.min(...numbers);
const missing = [];

for (let index = min; index < max; index++) {
    if (!numbers.includes(index)) {
        missing.push(index);}
}return missing;
}

console.log(pipeFix([1,2,3,5,6,8,9], '-->-', [1,2,3,4,5,6,7,8,9]));
console.log(pipeFix([1,2,3,12]), '-->-', [1,2,3,12]);
console.log(pipeFix([6,9]), '-->-', [6,7,8,9]);
console.log(pipeFix([-1,4]), '-->-', [-1,0,1,2,3,4]);
console.log(pipeFix([1,2,3]), '-->-', [1,2,3]);

console.log('---------');

const skaicius = 45636;
let string = skaicius.toString();

console.log(string);
console.log(string.length);

/* console.log('-----=====------');
for (let line = '#'; line.length < 8; line += '#') {
    console.log(line);
}
console.log('-----=====------');
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
} */
console.log('-----=====------');
/* For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). 
 */
/* for (let number = 1; number <= 100; number++) {
  if (number % 3 === 0) {
    console.log('Fizz');
  }
  if (number % 5 === 0) {
    console.log('Buzz');
  }
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
  }
} */
console.log('-----=====------');

/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. */

let length = 5;
let eilute = ' ';
for (let hashtag = 0; hashtag < length; hashtag++) {
  for (let space = 0; space < length; space++) {
    if ((hashtag + space) % 2 === 0) {
      eilute += ' ';
    } else {
      eilute += '#';
    }
  } eilute += '\n';
}
console.log(eilute);