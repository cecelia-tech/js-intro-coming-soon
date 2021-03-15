/* 
ternary operator: (klausimas)
lyginimas ? ka daryti jei tenkina logika: ka daryti kai logikos nera

palyginimas ? true: false
*/

const a = 5;
const b = 7;

let ats = '';
if (a>b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
}
console.log(ats);

const c = 9;
const d = 5;

const ats2 = c > d ? 'daugiau' : ' ne daugiau';
console.log(ats2);