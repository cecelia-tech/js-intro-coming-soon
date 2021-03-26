/* function didziausiasSkaicius(sarasas) {
    let didziausias = -Infinity;

    if (Array.isArray(sarasas)) {
        for (let index = 0; index < sarasas.length; index++) {
            const skaicius = sarasas[index];
            const vaikinisSarasas = didziausiasSkaicius(skaicius);
            if (didziausias < vaikinisSarasas) {
                didziausias = vaikinisSarasas;
            }
        }
    } else if(didziausias < sarasas) {
        didziausias = sarasas;
    }
    return didziausias;
}

const skaicius = [10, 5, 0,[ 15,[100,[201,[37, 45],[2021], 202], 200], 13, 6], 67, -5, 74, 8]
console.log(didziausiasSkaicius(skaicius)); */

//surasti skaiciu vidurki

function skaiciuVidurkis(skaiciai) {
    let skaiciuSuma = skaiciai[0];
    let skaiciuKiekis = 0;
    

if (Array.isArray(skaiciai)) {
            
        }
    for (let index = 0; index < skaiciai.length; index++) {
        const skaicius = skaiciai[index];
        const vidinisDidziausias = skaiciuVidurkis(skaicius);
        console.log(skaicius);
            skaiciuSuma += vidinisDidziausias.suma;
            console.log(skaiciuSuma);
        skaiciuKiekis++;
        
        
        /* if (Array.isArray(skaicius)) {
            const skaiciuSuma2 = skaiciuVidurkis(skaicius);
            
                skaiciuSuma += skaiciuSuma2.skaiciuSuma;
                skaiciuKiekis += 1;
                
            } */
        }
return {suma: skaiciuSuma, kiekis: skaiciuKiekis};
    }

    

const sarasas = [10, 5, 1,[ 15, 13, 6], 0, 67, -5, 74, 8]; //3000 / 17 = 176.470588   194 160

console.log(skaiciuVidurkis(sarasas));









console.log('-----=======-----');

/* function av(list) {
    let sum = 0;
    let count = 0;

    if (Array.isArray(list)) {
        for (let index = 0; index < list.length; index++) {
            const number = list[index];
            sum += number;
            count++;
        }
    } else {
        sum = list;
        count = list.length;
        
    }
    return {
        suma: sum,
        kiekis: count,
    }
}

const data = [1, 2, 3, 4, 5];

const atsakymas = av(data);
const atsakymas2 = atsakymas.suma / atsakymas.kiekis;
console.log(atsakymas2);
console.log(atsakymas.suma, 'and', atsakymas.kiekis); */

const multiply = (a, b) => a *b;
//const ats = multiply(8, 5);
console.log(multiply(8, 5));

const pirmaRaide = name => name[0];
console.log(pirmaRaide('Petras'));

//isrinkti pirmas zodziu raides is eilutes

function vardas(duotasZodis) {
    const zodis = duotasZodis.split(' ');
    console.log(zodis);
    const atsakymas = zodis[0][0] + '. ' + zodis[1][0];

    return atsakymas.toUpperCase();
}

const sakinys = vardas ('Pavasaris atejo');
console.log(sakinys);

//for each sarasas sarase

const doubleList = [[1, 5], [8, 99], [-8, -7, 15, 4], [3]];
let dlSuma = 0;

doubleList.forEach(vidineFunkcija => vidineFunkcija.forEach(vidinesVidinesSkaicius => dlSuma += vidinesVidinesSkaicius));
console.log(dlSuma);

const sarasas3 = [1, 2, 3, 4, 5];
let sarasasSuma = 0;

sarasas3.forEach(skaiciai => sarasasSuma += skaiciai);
console.log(sarasasSuma);

const sarasas4 = [5, 6, 7, 8, 9]; //35
let suma4 = 1;

sarasas4.forEach(skaicius4 => suma4 *= skaicius4);
console.log(suma4);

let i = 0;
while (i < sarasas4.length) {
    console.log(sarasas4[i]);
    i++;
}
console.log('-------');
let i1 = 0;
do { console.log(sarasas4[i1]);
    i1++;
} while (i1 < sarasas4.length);
console.log('-----');

let abc = ['a', 'b', 'c', 'd'];
let abc1 = [];
abc.forEach(raide => {
    abc1.push(raide);
}); console.log(abc1);