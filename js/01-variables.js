console.log('nobody');

/*  // kintamuju iniciavimo budai:
// const - kintamasis, kurio reiksmes negalima is naujo priskirti (yra papildomu salygu su kompleksiniais kintamaisiais)
// let - kintamasis, kurio reiksme gali buti priskirta kiek noori kartu (is naujo)
// var - esant galimybei nenaudoti

// kintamieji - jo atmintyje yra laikoma info
// salygos sakiniai - issakoti logika pagal ka daryti kai daugiau/maziau, tiesa/netiesa
// ciklai - kai turime sarasa su info kuri yra vienodos strukturos, pvz skaiciai
// funkcijos - aprasome logika, kuria norim panaudoti n kartu, tik su galimai skirtingais parametrais
// event'ai (event listeners) - skirta stebeti ivykius (click, scroll, keypress) i kuriuos reikia sureguoti iskvieciant norima funkcija */

const vardas ='Sara';
console.log(vardas);

let pavarde ='smith';
console.log(pavarde);

const pasisveikinimas = 'labas';
console.log(pasisveikinimas);

const pirmasskaaicius = 7;
const antrasskaicius = 77;
const suma = pirmasskaaicius + antrasskaicius;
console.log(pirmasskaaicius, '+', antrasskaicius, '=', suma);
const mathtext = pirmasskaaicius + '+' + antrasskaicius + '=' + suma;
console.log(mathtext)

const petrasname = 'Petras';
const age = 99;
const petrasage = petrasname + 'age is ' + age + '.';
console.log(petrasage);

console.log('--------------');
//sarasas (array)
const pazymiai = [5, 6, 3, 9];
console.log(pazymiai);



console.log('---------');

const m = 'love and hate';
console.log(m);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

//is mums zinomos 6 raidziu abeceles paskutine yra f
const abcIlgis = abc.length;
const paskutisRaidesPozicija = abcIlgis - 1;
const paskutineRaide = abc[paskutisRaidesPozicija];
console.log(paskutineRaide);

const abcAtsakymas = 'Is mums zinomos ' + abcIlgis + ' raidziu abeceles paskutine yra "' + paskutineRaide + '".';
console.log(abcAtsakymas);


