function bigNum(list) {
// input validation
    /* if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas, turi buti array'
    }
    if (list === null) {
        return 'ERROR: netinkamas tipas, turi buti null';
    } */
    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti null';
    }
    if (list.length === 0) {
        return 'ERROR:  array is empty';
    }
    //const max = Math.max(...list);

    let biggest = -Infinity;
    for (let i = 0; i<list.length; i++) {
    const number = list [i];
    //ar tai normalus sk
    if (typeof number !== 0 || !isFinite(number)) {
    continue;     //eina i sekancia operacija
    }
    
    //ar jis didesnis uz jau didziausia sk

    if (number > biggest) {
    biggest = number;
    }
    // logika

    //result

    return biggest;
}}

console.log(bigNum('pomidoras'));
console.log(bigNum(35474));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum(undefined));
console.log(bigNum());
console.log(bigNum(bigNum));
console.log(bigNum(null));

console.log(bigNum({}));
console.log(bigNum([]));
console.log( bigNum( [] ) );

console.log( bigNum( [ 1 ] ) );
console.log( bigNum( [ 1, 2, 3 ] ) );
console.log( bigNum( [ -5, 78, 14, 0, 18 ] ) );
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ) );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//rezultatas: Pateiktas sąrašas negali būti tuščias.

console.log( bigNum( [ 8, -2, -3, -4, -5, Infinity ] ) );
console.log( bigNum( [ Infinity, 8, -2, -3, -4, -5] ) );
console.log( bigNum( [ '', 8, -2, -3, -4, -5 ] ) );


console.log('------=======-------');


/* const mokykla = [
    ['Petras', [10, 8]],
    ['Maryte', [8, 7]],
];

const mokinys = ['Petras', [10, 8]];
const vardas = mokinys[0];
const pazymiai = mokinys[1];

console.log(vardas);
console.log(pazymiai);

const student = {
    vardas: 'Petras',
    pazymiai:[10, 8],
    megstamosRaides: 'gfj',
    kiekDienuGyvas: 54358,
    arNoriPc: true,
    arSiemetMaudeisi: false,
    tevai: {
        motina: {
            vardas: '',
            amzius: 55,
        },
        tevas: {
            vardas: '',
            amzius: 65,
        }
    }
}

//universalus info issitraukimas is objekto
console.log(student);
console.log(student['vardas']); //issitraukt is saraso
console.log(student['tevai']['motina']);

console.log('-----------');
//supaprastinimas info istraukimas per taska
console.log(student);
console.log(student.vardas);
console.log(student.tevai['motina']); */
