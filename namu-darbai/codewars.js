/* find the sum of all the positive numbers */
function positiveSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (0 <= number) {result += number;}} 
    return result;
}

console.log(positiveSum([1,2,3,4,5]),'=>', 15);
console.log(positiveSum([1,-2,3,4,5]), '=>', 13);
console.log(positiveSum([]),'=>', 0);
console.log(positiveSum([-1,-2,-3,-4,-5]),'=>', 0);
console.log(positiveSum([-1,2,3,4,-5]),'=>', 9);
//arr([2, -6, 4, 8, -10])

/*  test if a number is even */
/* function testEven(n) {
    if (n % 1 === 0) { return true} else { return false}} */

const testEven = n => n%2===0;

console.log(testEven(0),'=>', true);
console.log(testEven(0.5),'=>',  false);
console.log(testEven(1), '=>', false);
console.log(testEven(2), '=>', true);
console.log(testEven(-4), '=>', true);

console.log('-----------');
/* Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b. */

function arrayMadness(a, b) {
  let firstArray = 0;
  for (const i of a) {
      firstArray += i*2;
  }
  //console.log(firstArray);
  let secondArray = 0;
  for (const i2 of b) {
      secondArray += i2 *3;
  }
  const ats = firstArray > secondArray? true: false;
  return ats;
}
console.log(arrayMadness([1,2,3],[0,1,2]), '=>', true);
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), '=>',30, true);
console.log(arrayMadness([4,5,6],[1,2,3]), '=>', true);

    console.log(arrayMadness([5,6,7],[4,5,6]), '=>', false);
    console.log(arrayMadness([4,5,6],[3,4,5]), '=>', false);
    console.log(arrayMadness([3,4,5],[2,3,4]), '=>', false);
    console.log(arrayMadness([2,3,4],[1,2,3]), '=>', false);
    console.log(arrayMadness([5,3,2,4,1],[15]), '=>', false);
    console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), '=>', false);
    console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), '=>', false);
    console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), '=>', false);

    console.log('--------');
/* Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned. */

function strCount(str, letter){  
  let count = 0;
  for (const i of str) {
      const ans = i === letter? count++:0;
  } return count;
}

console.log(strCount('Hello', 'o'), '=>', 1);
console.log(strCount('Hello', 'l'), '=>',2);
console.log(strCount('', 'z'), '=>',0);

console.log('-------');

/* You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive. */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const ans = mpg * fuelLeft>= distanceToPump? true: false;
  return ans;
};

console.log(zeroFuel(50, 25, 2), '=>', true);
console.log(zeroFuel(100, 50, 1), '=>', false);

console.log('------------');
/* At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them. You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age]. */
function differenceInAges(ages){
    const ans = [];
    const youngest = ans.push(Math.min(...ages));
    const oldest = ans.push(Math.max(...ages));
    const dif = ans.push(Math.abs(ans[0]-ans[1]));
    console.log(dif);
return ans;
}

console.log(differenceInAges([82, 15, 6, 38, 35]), '=>',[6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), '=>',[14, 99, 85]);

console.log('--------');
/* A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return True if yes, False otherwise :) */
function hero(bullets, dragons){
return bullets/2 >= dragons;
}

console.log(hero(10, 5), '=>', true);
console.log(hero(7, 4), '=>',false);
console.log(hero(4, 5), '=>',false);
console.log(hero(100, 40),'=>', true);
console.log(hero(1500, 751),'=>', false);
console.log(hero(0, 1), '=>',false);

console.log('--------');
/* Complete the function that receives as input a string, and produces outputs according to the following table: */
function getDrinkByProfession(param){
    let ans = param.toLowerCase();
switch (ans) {
    case "jabroni":
        return('Patron Tequila');
        break;
case 'school counselor':
    return('Anything with Alcohol');
    break;
    case "programmer":
        return('Hipster Craft Beer');
        break;
        case "bike gang member":
        return('Moonshine');
        break;
        case "politician":
        return('Your tax dollars');
        break;
        case "rapper":
        return('Cristal');
        break;
        case "pundit":
        return('Beer');
        break;
        case "pug":
        return('Beer');
        break;
    default:
        return('Beer');
        break;
}
}

console.log(getDrinkByProfession("jabrOni"), '=>', "Patron Tequila");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol");
console.log(getDrinkByProfession("prOgramMer"),'=>', "Hipster Craft Beer");
console.log(getDrinkByProfession("bike ganG member"),'=>', "Moonshine");
console.log(getDrinkByProfession("poLiTiCian"),'=>', "Your tax dollars");
console.log(getDrinkByProfession("rapper"),'=>', "Cristal");
console.log(getDrinkByProfession("pundit"),'=>', "Beer");
console.log(getDrinkByProfession("Pug"), '=>',"Beer");

console.log('------');
/* Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below! E.g. Input: "aa", "bb" , "cc" =>Output: "abcabc"
 */

function tripleTrouble(one, two, three){
  let ans = '';
  for (let i = 0; i < one.length; i++) {
      ans += one[i] + two[i] + three[i]};
  return ans;
 }

console.log(tripleTrouble("this","test","lock"), '=>', "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"), '=>',"abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), '=>',"Batman");
console.log(tripleTrouble("LLh","euo","xtr"), '=>',"LexLuthor");

console.log('-------');

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let left = (blueStart+redStart)-(bluePulled+redPulled);
    let blueLeft = blueStart-bluePulled;
    console.log(blueLeft);
    let prob = 1 / left;
    console.log(prob);
    let ans = prob * blueLeft;
    console.log(ans);
  return (ans.toFixed(1));
}

console.log(guessBlue(5, 5, 2, 3),'=>', 0.6);
console.log(guessBlue(5, 7, 4, 3),'=>', 0.2);
console.log(guessBlue(12, 18, 4, 6),'=>', 0.4);

console.log('-------');
/* Your task is to write a function which returns the time since midnight in milliseconds. */
function past(h, m, s){
  return ((h * 3600) + (m * 60) + s) * 1000;
}
//1 sec = 1000msec;
console.log(past(0,1,1),'=>', 61000)
console.log(past(1,1,1),'=>',3661000)
console.log(past(0,0,0),'=>',0)
console.log(past(1,0,1),'=>',3601000)
console.log(past(1,0,0),'=>',3600000)

console.log('------');

var summation = function (num) {
  let ans = 0;
for (let i = 0; i <= num; i++) {ans += i; }return ans;}

console.log(summation(1),'=>', 1)
console.log(summation(8),'=>',  36)

console.log('--------');

function litres(time) {
    let ans = time * 0.5
  return Math.floor(ans);
}

console.log(litres(2), 1);
console.log(litres(1.4), 0);
console.log(litres(12.3), 6);
console.log(litres(0.82), 0);
console.log(litres(11.8), 5);
console.log(litres(1787), 893);
console.log(litres(0), 0);

console.log('------');
/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter. */
const areaOrPerimeter = function(l , w) {
   return l === w? l*w: (l+w)*2;}

console.log(areaOrPerimeter(4 , 4) , 16);
console.log(areaOrPerimeter(6 , 10) , 32);

console.log('------');
/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them. */
function abbrevName(name){
    const w = name.split(' ');
    const fL = w[0][0] + '.' + w[1][0];
return fL.toUpperCase();
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");

console.log('--------');

function toAlternatingCase(phrase) {
     let word = '';
    for (const i of phrase) {
        if (typeof i === 'number') {
            continue;
        }
        if (i === i.toUpperCase()) {
            word += i.toLowerCase();
        } else {
            word += i.toUpperCase();
        }
    }
    return word;
}

    console.log(toAlternatingCase("hello world"), '=>', "HELLO WORLD");
    console.log(toAlternatingCase("HELLO WORLD"),'=>',  "hello world");
    console.log(toAlternatingCase("hello WORLD"), '=>', "HELLO world");
    console.log(toAlternatingCase("HeLLo WoRLD"),'=>',  "hEllO wOrld");
    console.log(toAlternatingCase("12345"),'=>',  "12345");
    console.log(toAlternatingCase("1a2b3c4d5e"),'=>',  "1A2B3C4D5E");
    console.log(toAlternatingCase("String.prototype.toAlternatingCase"),'=>',  "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    console.log(toAlternatingCase("Hello World"),'=>',  "Hello World");

    console.log('-------');

    function isUpperCase(phrase1) {
    
        return phrase1 === phrase1.toUpperCase();
}

console.log(isUpperCase('hello I AM DONALD'));
console.log(isUpperCase('HELLO I AM DONALD'));
/* console.log('c'.isUpperCase(), false, 'c is not upper case');
    console.log('C'.isUpperCase(), true, 'C is upper case');
    console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
    console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
    console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
  }); */
  

  console.log('-------');
function removeEveryOther(arr){
    let ats = [];
  for (let i = 0; i < arr.length; i+=2) {
      ats.push(arr[i]);
  }return ats;}

  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), '=>', ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),'=>', [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),'=>', [['Goodbye']]);

console.log('-------');
/* divide to even numbers */

function divide(weight){
  if (weight%2 === 0){return true}
  if (weight%2 >= 1){return false}
  if (weight === 2) {return false}
   }

console.log(divide(4), '=>', true);
console.log(divide(2), '=>',  false);
console.log(divide(5), '=>',  false);
console.log(divide(88), '=>',  true);
console.log(divide(100),  '=>', true);

console.log('--------');
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
    for (const i of classPoints) {
      sum += i;
      
  }
   let ans = (sum + yourPoints) / (classPoints.length +1);
    console.log(ans);
  return ans < yourPoints;
}

//console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), 'should return True');
console.log(betterThanAverage([2, 3], 5), 'should return True');

console.log('------');
/* reversed string */
function solution(str){
  let ans = '';
  for (const i of str) {
      ans = i + ans;
  }
  return ans;
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

console.log('------');
/* number to array     
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}*/
function digitize(n) {
  let number = n + '';
  let sum = '';
    //number = number.toString().split('');
    for (i = 0; i <number.length; i++) {
        sum = (number[i] + sum); 
    }
    
    return sum.split('').map(Number);
}

console.log(digitize(35231), '=>', [1,3,2,5,3]);

console.log('--------');
/* remove first and last characters of a string 
function removeChar(str) {
  return str.slice(1, -1);
}*/
function removeChar(str){
  let ans = '';
 for (let i = 1; i < str.length-1; i++) {
   const element = str[i];
   ans +=element; } return ans;};

console.log(removeChar('eloquent'),'=>', 'loquen');
console.log(removeChar('country'), '=>','ountr');
console.log(removeChar('person'), '=>','erso');
console.log(removeChar('place'), '=>','lac');


console.log('--------');

function sumMix(x){
let num = x.map(Number);
let ans = 0;
for (let i = 0; i < num.length; i++) {
  ans += num[i];}return ans;}

console.log(sumMix([9, 3, '7', '3']),'=>', 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), '=>',42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']),'=>', 41);

console.log('------');
/* Example : n=5 >> [5,4,3,2,1] */
const reverseSeq = n => {
  let ans = '';
  for (let i = 1; i <= n; i++) {ans += i;}
  return ans.split('').reverse().map(Number);
};
console.log(reverseSeq(5), '=>', [5, 4, 3, 2, 1]);

console.log('---------');
/* multiply each number by 2 */
function maps(x){
  return x.map(x=> x*2);
}
console.log(maps([1, 2, 3]), '=>',[2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), '=>',[8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]),'=>', [4, 4, 4, 4, 4, 4]);

console.log('-------');
/* make an array from a number */

function monkeyCount(n) {
let number = [];
for (let i = 1; i <= n; i++) {
  number.push(i);
}return number;
}

console.log((monkeyCount(5)), '=>', [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)), '=>',[1, 2, 3]);
console.log((monkeyCount(9)),'=>', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10)), '=>',[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20)), '=>',[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

console.log('------');
/* numbers between */
function between(a, b) {
  let number = [];
  for (let i = a; i <=b; i++) {
    number.push(i);
  }
  return number;
}
console.log(between(1, 4), '=>', [1, 2, 3, 4]);
console.log(between(-2, 2), '=>',[-2, -1, 0, 1, 2]);

console.log('-------');
/* Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20% */

function calculateTip(amount, rating) {
  let r = rating.toLowerCase();
switch (r) {
  case "terrible":
    return 0;
    break;
  case "poor":
    return Math.ceil(amount * 0.05);
    break;
case "good":
    return Math.ceil(amount * 0.1);
    break;
    case "great":
    return Math.ceil(amount * 0.15);
    break;
    case "excellent":
    return Math.ceil(amount * 0.2);
    break;
  default:
    return "Rating not recognised";
    break;
}
}

console.log(calculateTip(20, "Excellent"),'=>', 4);
console.log(calculateTip(26.95, "GrEaT"),'=>', 3);

console.log('------');
/* reverse elements in the array */
function fixTheMeerkat(arr) {
 return arr.reverse();
}

console.log(fixTheMeerkat(["tail", "body", "head"]),'=>', ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), '=>', ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), '=>', ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]),'=>',  ["sky", "rainbow", "ground"]);

console.log('--------');
/* This function should return a number (final grade). There are four types of final grades:
100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases */
function finalGrade (exam, projects) {
    if (exam >= 90 || projects >=10) {
      return 100;}
    if (exam >= 75 || projects >=5) {
      return 90;}
    if (exam >= 50 || projects >=2) {
      return 75;} else {return 0;}
}
console.log(finalGrade(100, 12), '=>', 100);
console.log(finalGrade(85, 5),'=>', 90);
console.log('-------');

function noBoringZeros(n) {
  
const string = n.toString();
 let ans = [];
for (let i = string.length-1; i >=0 ; i--) {
  //console.log(string[i]);
 if (string[i] !== '0') {
      
      ans.push(string[i]);
    }
}
if (string.length = 1) {
  return n;
}
return ans;
}
console.log(noBoringZeros(0), '=>', 0);
console.log(noBoringZeros(-105),'=>',  -105);
console.log(noBoringZeros(1050),'=>',  105);

//console.log(noBoringZeros(1450), '=>', 145);
//console.log(noBoringZeros(960000), '=>', 96);
//console.log(noBoringZeros(-1050),'=>',  -105);