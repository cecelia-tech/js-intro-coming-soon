/* 
JS galimi ciklai ir 'cikliskos funkcijos/metodai'

(JS funkcijos)
- for;
-for-in;
-for-of;
-while;
-do-while;

(metodai)
-foreach;
-map;
-filter;
-reduce;
-sort;
*/

const list = [1, -5, 78, 2, 11, -14, 0, -8];

//FOR
// break: nutraukia ciklo darba
//continue: eiti i sekancia ciklo operacija, jeigu tokia yra

for (let index = 0; index < list.length; index++) {
    const item = list[index];
    if (item > 0) {
        continue;
    }
    console.log(item);
}
console.log('---------');
//FOR=IN

for (const index in list) {
    const item = list[index];
    if (item>0) {
        continue
    }
    console.log(index);
}
console.log('--------');
//for-of
for (const item of list) {
    if (item > 0) {
        continue;
    }
    console.log(item);
}

console.log('--------');
//WHILE

let randomNumber = 0;
let randomNumberCount = 0;

/* while (randomNumber < 0.9) {
let randomNumber = Math.random();
randomNumberCount++;
console.log(randomNumber);    
} */

let index = 0;
while (index < list.length) {
    const item = list[index];
    if (item <-10) { //nedaryti item > 0 ir continue
        break;
    }
    console.log(item);
    index++;
}
console.log('---------');
//DO=WHILE, pirmiau daro, paskui klausia
//break leidziamas

let dwi = 0;
do {
console.log(dwi);
dwi++;
} while (dwi < 5)

console.log('----------------');

//METODAI   //METODAI    //METODAI   //METODAI   //METODAI

//FOR-EACH


list.forEach(function (item) {
    console.log(item);
})
console.log('------');

const doubleList = [[1, 5], [8, 99], [-8, -7, 15, 4], [3]];
let dlSuma = 0;

doubleList.forEach(innerList => innerList.forEach(n => dlSuma += n));
console.log(dlSuma);
console.log('*****************');

//MAP
//map metodas perejes per sarasa, grazina tokio patcio dydzio sarasa, tik su pakeistomis reiksmemis
const maplist = [1, 2, 3, 4, 5, 6];

const mapListSquare = maplist.map(n=> n*n);
console.log(mapListSquare);

/* ***************** */
//uzdavinys: visi neigiami skaiciai tur buti konvertuoti i nuli, o teigiami palikti
const pazymiai = [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n => n < 0? 0:n);
console.log(konvertuotiPazymiai);

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];
const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai);
console.log(sveikieji);

console.log('-------');

//FILTER
//atrinkti tik tikrus pazymius t.y. imtinai nuo 1 iki 10
const marks = [10, -8, 2, -6, 3.14, 8, -2, 11, 55];

const filteredMarks = marks.filter (m => m >= 1 && m <= 10 && m % 1 === 0);

console.log(marks);
console.log(filteredMarks);

console.log('=========');

//palikti zodzius is didziosis raides


const dictionary = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const isDidziosios = dictionary.filter(word => word[0] === word[0].toUpperCase());

console.log(dictionary);
console.log(isDidziosios);

console.log('---------');

//REDUCE
// eina per sarasa, paima visas reiksmias is eiles ir su jomis padaro viena bendra rezultata
//pvz. jei turim pazymiu sarasa, tai eina per pazymius ir suskaiciuoja pazymiu suma

const petriukoPazymiai = [10, 2, 8, 6, 4];

let petriukoPazymiuSuma = 20;
petriukoPazymiai.forEach(p => petriukoPazymiuSuma += p);
console.log(petriukoPazymiuSuma);

const reducedPazymiai = petriukoPazymiai.reduce((total, paz) => total + paz, 20);

console.log(reducedPazymiai);

console.log('--------');


//koks gausis tekstas, jei sujungsime visu zodziu pirmas raides
const dictionary2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const short = dictionary2.reduce((total, word) => total + word[0], '');
console.log(short);