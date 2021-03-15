
const marks = [10, 8, 6, 4];

const count = marks.length;
let sum = 0;

sum = sum + marks[0];   // 0+10
console.log('sum', sum);

sum = sum + marks [1];  // 10+8
console.log('sum', sum);

sum = sum + marks [2];  // 18+6
console.log('sum', sum);

sum = sum + marks [3];  // 24+4
console.log('sum', sum);

const average = sum / count;
console.log(average);

console.log('---------');

const marks2 = [2, 4, 6, 8]

let sum2 = 0; //is const pakeiciam i let
console.log(sum2);

sum2 = sum2 + marks2[0];
console.log(sum2);

sum2 += marks2[1];
console.log(sum2);

sum2 += marks2[2];
console.log(sum2);

sum2 += marks2[3];
console.log(sum2);


console.log('--------');

const marks3 = [2, 4, 6, 8]

let sum3 = 0; //is const pakeiciam i let
let markIndex = 0;
console.log(sum3);

sum3 += marks3[markIndex];
console.log(sum3);

sum3 += marks3[markIndex];
console.log(sum3);

sum3 += marks3[markIndex];
console.log(sum3);

sum3 += marks3[markIndex];
console.log(sum3);

console.log('--------');

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;

zodis = zodis +abc[abcIndex];
console.log(zodis);

abcIndex += 1;  // tas pat kaip abcIndex++; padidina 1 vienetu
zodis = zodis +abc[abcIndex];
console.log(zodis);

abcIndex += 1;  // tas pat kaip abcIndex++; padidina 1 vienetu
zodis = zodis +abc[abcIndex];
console.log(zodis);

abcIndex += 1;  // tas pat kaip abcIndex++; padidina 1 vienetu
zodis = zodis +abc[abcIndex];
console.log(zodis);

abcIndex += 1;  // tas pat kaip abcIndex++; padidina 1 vienetu
zodis = zodis +abc[abcIndex];
console.log(zodis);

console.log('---------');

let a = 5;
a++;
console.log(a);
a++;
console.log(a);
a++;
console.log(a);