//ISRINKTI RAIDES

function isrinktiRaides(tekstas, skaicius) {
    //input validation
    if (typeof tekstas !== 'string') { 
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (tekstas.length === 0 || 100 < tekstas.length ) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if (typeof skaicius !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (skaicius === 0 || !isFinite(skaicius)) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.'
    }
    if (tekstas.length < skaicius) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    }
    //logic
    let isrinktosRaides = '';
    for (let index = skaicius-1; index < tekstas.length; index+=skaicius) {
            isrinktosRaides += tekstas[index];
        
        
    }
    //rezult
    return isrinktosRaides;
}

console.log( isrinktiRaides( 1561, 2 ), '->', 'ERROR' );
console.log( isrinktiRaides( 'abc', 0 ), '->', 'ERROR' );
console.log( isrinktiRaides( 'abc', 4 ), '->', 'ERROR' );

console.log( isrinktiRaides( 'abcdefg', 2 ), '->', 'bdf' );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( isrinktiRaides( '12345678910', 4 ), '->', '48' );
console.log( isrinktiRaides( '12345678910', Infinity ), '->', 'Error' );
console.log( isrinktiRaides( '12345678910', NaN ), '->', 'Error' );
console.log( isrinktiRaides( true, NaN ), '->', 'Error' );
console.log( isrinktiRaides( isrinktiRaides, NaN ), '->', 'Error' );
console.log( isrinktiRaides( '[isrinktiRaides]', 3 ), '->', 'Error' );

console.log('------=======------');


