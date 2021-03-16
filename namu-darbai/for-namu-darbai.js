const intervalas = [7, 8, 4, 9];
let sum = 0;

for (i =0; i<intervalas.length; i++){
const mark = intervalas[i];
sum += mark;
}

console.log(sum, intervalas[i]);

console.log('---0-0--');
let sum2 = 0;
for (i=0; i<=0; i++) {
sum2 += i;
}
console.log(sum2);

console.log('----0-4---');

let sum3 = 0;

for (i=0; i<=4; i++) {
sum3 += i;
console.log(sum3);
}
console.log(sum3);

console.log('--0-100--');

let sum4 = 0;

for (i=0; i<=100; i++){
sum4 += i;
}
console.log(sum4);

console.log('--574-815--');
let sum5 = 0;

for (i=574; i<=815; i++) {
sum5 += i;
}
console.log(sum5);

console.log('==-50==-50==');
let sum6 =0;
for (i=-50; i<=-50; i++) {
sum6 += i;
}
console.log(sum6);

console.log('==-70=-30==');
let sum7 = 0;

for (i=-70; i<=-30; i++){
sum7 += i;
}
console.log(sum7);

console.log('-abcdef=fedcba-');

const abc = 'abcdef';
let sum8 = '';

for(i=abc.length-1; i>=0; i--){
const vieta = abc[i];
sum8 +=vieta;
}
console.log(sum8);

console.log('--practice--');

const sakinys = 'obuolys';
let sum9 = '';

for (i=sakinys.length-1; i>=0; i--) {
sum9 += sakinys[i];
}
console.log(sum9);

console.log('--practice2--');

const sarasas = ['a', 'b', 'c'];
let sum10 = '';

for (i=sarasas.length-1; i>=0; i--) {
sum10 += sarasas[i];
}
console.log(sum10);

console.log('--practice3--');

const sarasas2 = [1, 2, 3];
let sum11 = 0;

for (i=sarasas2.length-1; i>=0; i--) {
sum11 -= sarasas2[i];
console.log(sum11);
}
console.log(sum11);

console.log('---integer---');

const skaicius = 0;
let kintamasis = 11;
for (i=8; i<=31; i++) {
kintamasis = i% skaicius;
if (kintamasis === 0) {
    console.log(kintamasis);
}
}

