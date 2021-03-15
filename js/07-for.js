/* 
for loop (ciklas);

for () {};
*/
const marks3 = [2, 4, 6, 8]

let sum3 = 0; //is const pakeiciam i let
let markIndex = 0;

sum3 += marks3[markIndex];

sum3 += marks3[markIndex++];

sum3 += marks3[markIndex++];

sum3 += marks3[markIndex++];

for (let i = 0; i <5; i++) {
    console.log(i);
}

console.log('--------');

for (let i=0; i<=7; i++) {
    console.log(i);
}
console.log('-----------');

const marks = [5, 7, 10, 4, 2, 10];
let sum = 0;

for (let i=0; i < marks.length; i++) {
    const pazymys = marks[i];
    sum += pazymys;

}
const average = sum / marks.length;

console.log(sum, '/', marks.length, '=', average);



console.log('------');

const abc1 = ['a', 'b', 'c', 'd'];

for (let i=0; i<abc1.length; i++){
const raide = abc1[i];
console.log(raide);
}