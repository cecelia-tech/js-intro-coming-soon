const pirmas = (10);
console.log(pirmas);
const antras = (9);
console.log(antras);
const trecias = (8);
console.log(trecias);

console.log('--------');

const pirma = ('z');
console.log(pirma);
const antra = ('y');
console.log(antra);
const trecia = ('x');
console.log(trecia);

console.log("----------");

const skaiciai0 = [1, 2, 3, 4, 5];
console.log(skaiciai0);
const skaiciai1 = [6, 7, 8, 9, 10];
console.log(skaiciai1);
const skaiciai2 = [11, 12, 13, 14, 15];
console.log(skaiciai2);

console.log('---------');

const zodziai0 = ['abc def ghi jkl mno'];
console.log(zodziai0);
const zodziai1 = ['pavasaris vasara ruduo ziema sezonai'];
console.log(zodziai1);
const zodziai2 = ['zalia melyna rudona geltona rausva'];
console.log(zodziai2);
const zodziai3 = ['ruda juoda balta'];
console.log(zodziai3);

console.log('--------');

const suma0 = pirmas + antras + trecias;
console.log(suma0);
const suma1 = skaiciai0[0] + skaiciai0[1] + skaiciai0[2] +skaiciai0[3] + skaiciai0[4];
console.log(suma1);
const suma2 = skaiciai1[0]+ skaiciai1[1] + skaiciai1[2] + skaiciai1[3] +skaiciai1[4];
console.log(suma2);
const suma3 = skaiciai2[0] + skaiciai2[1] + skaiciai2[2] + skaiciai2[3] + skaiciai2[4];
console.log(suma3);
const visoSuma = suma0 + suma1 + suma2 + suma3;
console.log(visoSuma);

console.log('---------');

const zodziaiSuTarpais = pirma[0] + ' ' + antra[0] + ' ' + trecia[0] + ' ' + zodziai0 + ' ' + zodziai1 + ' ' + zodziai2 + ' ' + zodziai3;
console.log(zodziaiSuTarpais);

console.log('---------');

const sudetisAtimtis0 = skaiciai0[0] - skaiciai0[1] + skaiciai0[2] - skaiciai0[3] + skaiciai0[4];
console.log(sudetisAtimtis0);
const sudetisAtimtis1 = skaiciai1[0] - skaiciai1[1] + skaiciai1[2] - skaiciai1[3] + skaiciai1[4];
console.log(sudetisAtimtis1);
const sudetisAtimtis2 = skaiciai2[0] - skaiciai2[1] + skaiciai2[2] - skaiciai2[3] + skaiciai2[4];
console.log(sudetisAtimtis2);

console.log('--------');

const zodziaiSuTarpais1 = zodziai3 + ', ' + zodziai2 + ', ' + zodziai1 + ', ' + zodziai0 + ', ' +pirma + ', ' + antra + ', ' + trecia;
console.log(zodziaiSuTarpais1);

console.log('--------');
console.log('--------');
console.log('praktika');
console.log('--------');
console.log('--------');

const du = zodziai0 + zodziai1;
console.log(du);

const kiti = ['when', 'love', 'and', 'death', 'embrace'];
console.log(kiti);
const kiti1 = ['Im', 'in', 'love', 'with', 'you'];
console.log(kiti1);
const kitiKartu = kiti + ', ' + kiti1;
console.log(kitiKartu);

console.log('-----if, if else, if else if---');

if (pirmas > antras) {
    const ats = 'Pomidoras';
    console.log(ats);
    
}
if (pirmas < antras) {
    const ats1 = 'Pomidoras';
    console.log(ats1);
} else { const ats2 = 'Bandykite dar karta!';
    console.log(ats2);
}
if (pirmas === antras) {
    const ats2 = 'Pomidoras';
    console.log(ats2);
} else {
    const ats3 = 'Bandykite dar karta';
    console.log(ats3);
}
if (pirmas !== antras) {
    const nelygus = 'Pomidoras';
    console.log(nelygus);
} else { const nelygus1 = 'Bandykite dar karta';
    console.log(nelygus1);
}
if (pirmas >= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (pirmas <= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
console.log('--teksto kintamuju ilgiai--');

const pavasaris = 'Pavasaris';
const pavasarisIlgis = pavasaris.length;
console.log(pavasarisIlgis);

const vasara = 'Vasara';
const vasaraIlgis = vasara.length;
console.log(vasaraIlgis);

if (pavasarisIlgis > vasaraIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta.');
}
if (pavasarisIlgis < vasaraIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (pavasarisIlgis === vasaraIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (pavasarisIlgis !== vasaraIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (pavasarisIlgis >= vasaraIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (pavasarisIlgis <= vasaraIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('--saraso kintamuju ilgiai--');

const sarasoIlgis = [3, 6, 8, 1, 0, 4, 2, 7];
console.log(sarasoIlgis.length);
const sarasoIlgis1 = [5, 8, 1, 0];
console.log(sarasoIlgis1.length);

if (sarasoIlgis.length > sarasoIlgis1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (sarasoIlgis.length < sarasoIlgis1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (sarasoIlgis.length === sarasoIlgis1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (sarasoIlgis.length !== sarasoIlgis1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (sarasoIlgis.length >= sarasoIlgis1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (sarasoIlgis.length <= sarasoIlgis1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}


console.log('---- papildomai----');

/* 
pasiimti, kai:
- laike šviečia / nešviečia saulė
- lyja / nelyja
- stovi vilkas / jo nėra
*/

const oras = 'pavasaris';

if (oras === 'sviecia saule') {
    console.log('krema nuo saules');
} else if (oras === 'apsiniauke') {
    console.log('megztini');
} else if (oras === 'lyja') {
    console.log('sketi');
} else if (oras === 'sninga') {
    console.log('palta');
} else {
    console.log('Ar tikrai matei, koks oras?');
}

const gele = 'gvazdikas';
switch (gele) {
    case 'roze':
    console.log('meiles gele');
    break;
    case 'tulpe':
    console.log('moters dienos gele');
    break;
    case 'gvazdikas':
    console.log('draugyste');
    break;
    default:
    console.log('tokios geles nezinau');
    break;
}

const baldas = 'hfg';
switch (baldas) {
    case 'kede':
    case 'stalas':
    case 'lova':
    case 'spinta':
        console.log('gali nusipirkti');
        break;
    case 'kate':
    default: console.log('ne baldas');
        break;
}

const ranka = 'desiniarankis';
if (ranka === 'desiniarankis') {
    console.log('tuomet puiku');
}

const ranka2 = 'desine';
if (ranka2 === 'desine') {
    console.log('tau pasiseke');
} else {
    console.log('tada tu kairiarankis');
}

const ranka3 = 'desine ranka';
if (ranka3 === 'desine ranka') {
    console.log('tau pasiseke');
} else if (ranka3 === 'kaire ranka') {
    console.log('irgi gerai');
} else { console.log('ar turi rankas?');}

const cookiesAgreed = true;
if (cookiesAgreed) {
    console.log('proceed to the website');
} if(!cookiesAgreed) {
    console.log('sutikti su cookies');
}

const age = 21;
const beverage = (age >=21) ? 'Vine': 'Soft drink';
console.log(beverage);

for (I=0; I<=15; I++)
{if (I== 10) continue;
console.log('I=' + I + "<BR>");}

console.log('\u{1F600}');