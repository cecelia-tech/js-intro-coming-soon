/* 
visos kombinacijos darbui su tekstu
*/
//siandien yra kovo desimta.
const menuo = 'Kovo';
const diena = 'desimta';

const dayString = 'Siandien yra: ' + menuo + ' ' + diena +'.';
console.log(dayString);

// Cia yra dviguba ("") kabute.
const dvigubaKabute = 'Cia yra dviguba (") kabute.';
// reikia rasyti kitokia kabute isoreje negu tekste
console.log(dvigubaKabute);

// Turiu vienguba (') ir dviguba ("") kabutes
const viengubaDviguba = "Turiu vienguba (') ir dviguba (\") kabutes.";
//noring ignoruoti kabute anksciau negu programa skaito, reikia pries ta zenkla padet "\".
console.log(viengubaDviguba);
// Turiu dviguba ("") ir vienguba (') kabutes
const dvigubaVienguba = 'Turiu dviguba ("") ir vienguba (\') kabutes';
console.log(dvigubaVienguba);

// Max saugumas dviguba ("") ir vienguba (') kabutes
const maxSaugumas = 'Max saugumas dviguba (\") ir vienguba (\') kabutes';
// rekomenduojama deti "\" pries visas kabutes esancias tekste
console.log(maxSaugumas);

const navHTML = '<nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                </nav>';
// Jei norim numest eilute, vel reikia "\". bet konsoleje gali mest i viena eilute, jei yra vietos tarpam.
console.log(navHTML);

console.log('---------');

//mano vardas: Sara.
const vardas = "Sara";
const saraIntro = "Mano vardas: " + vardas + '.';
console.log(saraIntro);

const saraBacktick = `Mano vardas: ${vardas}.`;
//iterpiama reiksme su ${} , bet turi buti naudojama backtick
console.log(saraBacktick);

//Naujausias pazymys:2.
const marks = [10, 5, 8, 7, 2]
const marksSentence = `Naujausias pazymys: ${marks[marks.length - 1]}.`;
console.log(marksSentence);

const navHTML2 = `<nav>
<a href="#">Link</a>
<a href="#">Link</a>
<a href="#">Link</a>
</nav>`;
// Jei teksta apgaubiam backtick ir keliant su "enter" nereikia "\". Bet jis atskaito visus tarpus. islaiko teksta toki, koks parasytas.
console.log(navHTML2);