//DIDZIAUSIAS SKAICIUS SARASE//

function didziausiasSkaiciusSarase(skaiciai) {
    //input validation
    if (!Array.isArray(skaiciai)) { return 'Pateikta netinkamo tipo reikšmė.';}
    if (skaiciai.length === 0) { return 'Pateiktas sąrašas negali būti tuščias.';
    }
    //logic
    let didziausias = -Infinity;
    let antrasDidziausias = -Infinity;
    for (let index = 0; index < skaiciai.length; index++) { 
        const number = skaiciai[index];
        
        if (!isFinite(number) || typeof number !== 'number') {
        continue;}
        
        
        if (didziausias < number) {antrasDidziausias = didziausias;
        didziausias = number;} 
        else if (antrasDidziausias < number && number < didziausias ) {
            antrasDidziausias = number;
        }



        /* if (didziausias > number[i-1]) {
            
        } */
        }
        if (didziausias === -Infinity || antrasDidziausias === -Infinity) {
            return 'ERROR: nera normalaus skaiciaus';
        }
    //result
    return antrasDidziausias || didziausias; 
}



console.log( didziausiasSkaiciusSarase( [ '777', NaN, -Infinity ] ), '->', 'Error');
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );

console.log( didziausiasSkaiciusSarase( [ 1 ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '->', 2 );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '->', 18);
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), '->', 66 );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -2 );
console.log( didziausiasSkaiciusSarase( [ Infinity, 2, 3 ] ), '->', 2 );
console.log( didziausiasSkaiciusSarase( [ 1, NaN, 3 ] ), '->', 1 );


/* const eilute = [20, 25, 30, 35];
console.log(eilute[2]);
console.log(eilute.length);
console.log(eilute.length -2);
console.log(eilute); */

//const skaiciai2 = [];

//console.log(antrasDidziausias3)
//console.log(kurioReikia);


/* function pabandymas(skaiciai2) {
    let antrasDidziausias3 = -Infinity;
let kurioReikia = -Infinity

for (let index = 0; index < skaiciai2.length; index++) {
    let vienas = skaiciai2[index];
    let du = skaiciai2[index - 1];
    let trys = skaiciai2[index - 2];

    if (antrasDidziausias3 < vienas) {
             antrasDidziausias3 = vienas;
        };

    if (trys < du < antrasDidziausias3) {
        kurioReikia = du;
    }
}
    return kurioReikia;
}

console.log(pabandymas([4, 7, 1, 10, 25]));
console.log(pabandymas([4, 15, 1, 10, 25]));
console.log(pabandymas([4, 7, 1, 10, 25]));
console.log(pabandymas([4, 7, 1, 10, 25]));
console.log(pabandymas([4, 7, 1, 10, 25]));
       //mazesnis < sakicius < didzizusia */