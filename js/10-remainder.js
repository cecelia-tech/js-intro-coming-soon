/* 
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
*/
const nuo = -18;
const iki = -18;
const daliklis = 7;
let kiekis = 0;

for (let i = nuo; i <=iki; i++){
if (i % daliklis ===0) {kiekis++;}
}
const ats = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`
console.log(ats);