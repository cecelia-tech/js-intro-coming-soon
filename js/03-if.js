/* 
if statement:

logikos sablonai:
if () {}
if () {} else {}
if () {} elif {}


palyginimo operatoriai:
- visi; <, >, <=, >=, ==, != (ne), ===, !==, !
- naudotini;<, >, >=, <=, ===, !==, !
- nenaudotini: ==, != (nes nera tikrinamas reiksmiu tipas).
loginiai operatoriai &&, ||
*/

const a = 7;
const b = 4;

if (a > b) {
   console.log(a, 'yra daugiau uz', b);
}

// zemiau neveikia, nes ne tiesa
const a1 = 7;
const b1 = 44;

if (a1 > b1) {
   console.log(a, 'yra daugiau uz', b);
}

const a2 = 7;
const b2 = 45;

if (a2 > b2) {
    const ats = `${a2} yra daudiau uz ${b2}`
   console.log(ats);
}
console.log('-------');

const c = 7;
const d = 10;

if (c<d) {
const cdMaziau = `${c} yra maziau uz ${d}`;
console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra ne maziau uz ${d}`;
console.log(cdNeMaziau);
}

console.log('------');

const e = '8';
const f = 9;
if (e===f) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log('------');

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismeta cookies sutikimo bloka');
}
if (!cookiesAgreed) {
    console.log('Ismeta cookies sutikimo bloka. 2');
}

console.log('------');

const userLogedIn = false;

if (userLogedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}

console.log('------');
//simboliu ilgis
const pomidoras = 'Pomidoras';
const pomidoroIlgis = pomidoras.length;
console.log(pomidoroIlgis);

console.log('------');

const akys = 'rudos';
if (akys === 'Melynos') {
    console.log('faina');
} else if ( akys === 'zalios') {
    console.log('sexy');
} else if (akys === 'rudos') {
     console.log('Ar turi akis?');   
}


