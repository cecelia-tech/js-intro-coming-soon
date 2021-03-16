function pazymiuVidurkis (vardas, pazymiai) {

    let suma = 0;
    for (let i = 0; i < pazymiai.length; i++) {
suma += pazymiai[i];
    }
    const average = suma / pazymiai.length;
//Vardenis: pazymiu vidurkis ura 6.
console.log(`${vardas}: pazymiu vidurkis ura ${average}.`);
}


pazymiuVidurkis('Petriukas', [10, 2, 8, 4]);
pazymiuVidurkis('Maryte', [10, 8, 6,4]);