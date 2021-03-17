function daugyba(a, b) {
    //parametru validacija
    //jeigu a ne skaicius, grazinti klaidos pranesima
    //jeigu b ne skaicius, grazinti klaidos pranesima
if (typeof a !== 'number' ){return 'Pirmasis parametras turi buti skaiciaus tipo'};
if (typeof b !== 'number' ){return 'Antrasis parametras turi buti skaiciaus tipo'};
if (isNaN(a) ){return 'Pirmasis parametras turi buti normalus skaicius.'};
if (isNaN(b) ){return 'Antrasis parametras turi buti normalus skaicius.'};
if (a === Infinity ){return 'Antrasis parametras turi buti normalus skaicius.'};
if (b === Infinity ){return 'Antrasis parametras turi buti normalus skaicius.'};
if (a === - Infinity ){return 'Antrasis parametras turi buti normalus skaicius.'};
if (b === - Infinity ){return 'Antrasis parametras turi buti normalus skaicius.'};

//if (isNaN(a) || a === Infinity || a === - Infinity) { return `Pirmasis parametras turi buti normalus skaicius o ne ${a}.`}
//if (!isFinite (a)) {return `Pirmasis parametras turi buti normalus skaicius o ne ${a}.`}

    
    


    // logika
    const rez = a * b;
    //rezultato grazinimas
    
    return rez;
}

console.log(daugyba(4, 5), '->', 20); 
console.log(daugyba('penki', 5), '->', 20); 
console.log(daugyba(4, 'penki'), '->', 20); 
console.log(daugyba(true, 5), '->', 20); 
console.log(daugyba(NaN, 5), '->', 20); 
console.log(daugyba(Infinity, 5), '->', 20); 
console.log(daugyba(- Infinity, 5), '->', 20); 
console.log(daugyba(Infinity, 5), '->', 20); 