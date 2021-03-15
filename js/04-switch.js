/* 
SWITCH STATEMENT (visada lygina = arba !=, nera < ar >)

switch () {case break, default};
*/

const animal = 'cat';
switch (animal) {
    case "dog":
        console.log('Bark bark');
        break;
case 'cat':
    console.log('Meow');
    break;
    default:
        console.log('Unknown animal');
        break;
}

console.log('-----------');

const day = 1;
switch (day) {
    case 1:
        console.log('Pirm');
        break;
case 2:
console.log('Antr.');
break;
case 3:
    console.log('Trec');
    break;
    default:
        console.log('Tokios dienos nera');
        break;
}

switch (day) {
    case 1:
        console.log('Pirm');
        break;
        case 2:
            console.log('Antr.');
        break;
case 3:
            console.log('trec.');
        break;
        case 4:
            console.log('ket.');
        break;
        case 5:
            console.log('pen.');
        break;
        case 6:
            console.log('savaitgalis.');
        break;
        case 7:
            console.log('savaitgalis.');
        break;
    default:
        console.log('Tokios dienos nera');
        break;
}

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    console.log('Darbo diena');
        break;
    case 6:
    case 7:
        console.log('Savaitgalis');
        break;
    default:
        console.log('Tokios dienos nera');
        break;
}

const process = 3;

if (process === 1) {
    console.log('Paimti puodeli');
} else if (process === 2) {
    console.log('isideti arbatos');
} else if (process === 3) {
    console.log('isideti cukraus');
} else if (process === 4) {
    console.log('ipilti vandens');
} else if (process === 5) {
    console.log('ismaisyti');
} else if (process === 6) {
    console.log('gerti');
}

switch (process) {
    case 1:
        console.log('Paimti puodeli');
    case 2:
        console.log('isideti arbatos');
    case 3:
        console.log('isideti cukraus');
    case 4:
        console.log('ipilti vandens');
    case 5:
        console.log('ismaisyti');
    case 6:
            console.log('gerti');
            break;
    default:
        console.log('you\'re done');
    break;
}
