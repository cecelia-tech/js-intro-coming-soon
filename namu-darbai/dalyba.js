//Funkcija pavadinimu “dalyba”
function dalyba(a, b) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return `Given input is not a number`;
    }
    if (!isFinite(a) || !isFinite(b)) {
        return `provided number is not a normal number`
    }
    const dalmuo = a / b;
    return dalmuo;

}

console.log(dalyba (NaN, 5));
console.log(dalyba (5, NaN));
console.log(dalyba (Infinity, 5));
console.log(dalyba (0, -Infinity));
console.log(dalyba (-Infinity, -Infinity));
console.log(dalyba ([5], 5));
console.log(dalyba ('5', 5));
console.log(dalyba (7, 'abc'));
console.log(dalyba (dalyba, 5));
console.log(dalyba (true, false));
console.log(dalyba (false, 5));
console.log(dalyba (2, true));
console.log(dalyba ([2, 4], 5));
console.log(dalyba (8, [7, 8]));
console.log(dalyba ({}, 3));
console.log(dalyba ());
console.log(dalyba (2, 5));
console.log(dalyba (2.2, 2.2));
console.log(dalyba (-2.2, 2.2));
console.log(dalyba (2.2, -2.2));