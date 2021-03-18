function skaitmenuKiekisSkaiciuje(skaicius) {
// input validation
if (typeof skaicius !== 'number') {
    return 'Turi buti skaiciaus tipas';
} /* if (isNaN(skaicius)) {
    return 'Turi buti skaiciaus tipas';
}
if (!isNaN(skaicius)) {
    return 'Turi buti skaiciaus tipas';} */
    if (!isFinite(skaicius)) {
    return 'Turi buti skaiciaus tipas';}
    //could be used instead of both inNaN

//logic
const absoliutas = Math.abs(skaicius);
const tekstinisSkaicius = '' + absoliutas;
let skaitmenuKiekis = tekstinisSkaicius.length;

//jei skaicius turi desimtaine dali, tai sumaziname 1 vienetu

if (skaicius % 1 !== 0) {
     skaitmenuKiekis--;
}
/* if (skaicius < 0) {  gali buti vietoj math.abs
     skaitmenuKiekis--;
} */
//return
    return skaitmenuKiekis;
}
console.log( skaitmenuKiekisSkaiciuje( true ) );
//rezultatas: Pateikta netinkamo tipo reikšmė.
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );
console.log( skaitmenuKiekisSkaiciuje(-Infinity ) );
console.log( skaitmenuKiekisSkaiciuje( ) );
console.log( skaitmenuKiekisSkaiciuje(undefined ) );
console.log( skaitmenuKiekisSkaiciuje(null ) );
console.log( skaitmenuKiekisSkaiciuje([]) );
console.log( skaitmenuKiekisSkaiciuje('') );
console.log( skaitmenuKiekisSkaiciuje([2543]) );
console.log( skaitmenuKiekisSkaiciuje(skaitmenuKiekisSkaiciuje) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

console.log( skaitmenuKiekisSkaiciuje(5) );
console.log( skaitmenuKiekisSkaiciuje(781) );
console.log( skaitmenuKiekisSkaiciuje(37060123456));
console.log( skaitmenuKiekisSkaiciuje(3.15));
console.log( skaitmenuKiekisSkaiciuje(-654));
//rezultatas: Pateikta netinkamo tipo reikšmė.
