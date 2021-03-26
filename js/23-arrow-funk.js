//rodiklines funkcijos

function suma(a, b) {
    return a +b;
}

const atsSuma = suma(8, 5);
console.log(atsSuma);




function atimtis(a, b) {
    return a - b;
}
/* ************************* */

/* const atsAtimtis = atimtis(8, 5);
console.log(atsAtimtis); */


/* const daugyba = function (a, b) {
    return a * b;
} sitas teisingas
const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba); */

/* const atimtis = function (a, b) {
    return a - b;
}
// koda rasyti is eiles, kad pirma butu funkcija,o paskui parametrai
const a = 5;
console.log(typeof atimtis); */


//arrow function priskyrimas kintamajam
const daugyba = (a, b)  => {
    return a * b;
}
const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

//arrow function priskyrimas kintamajam
// jei logika turi tik !!viena!! procedura, tai galima nerasyti {} ir return;
const dalyba = (a, b) => a/b;

const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);

console.log('------------');
//arrow function priskyrimas kintamajam
// jei logika turi tik !!viena!! procedura, tai galima nerasyti {} ir return;
//jei ti vienas parametras, galima nerasyti ()
const kvadratu = a => a * a;

const atsKvadratu = kvadratu(8, 5);
console.log(atsKvadratu);

console.log('------------');

/* =========================== */
/* =========================== */
/* =========================== */

const vardas = 'Vardenis';

const pirmaRaide = name => name[0]; 
const raide = pirmaRaide(vardas)
console.log(raide);