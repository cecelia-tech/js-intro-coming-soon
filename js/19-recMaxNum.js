/* 
Rasti didziausia skaiciu bet kokio sudetingumo arry'je 

Salygis:

- visi array elementai yra : arba skaiciai, arba array;
- visi skaiciai yra normalus*/

/* function recMaxNum (list){
let big = -Infinity;

for (let i = 0; i < list.lenght; i++)
{const num = list[i];

if (Array.isArray(num)) {
    const bigChild = recMaxNum(num);
    if(bigChild > big) {big = bigChild;}
} else {

if (num > big) {
    big = num;
}}}
return big;
}
const biggest = recMaxNum(data);
console.log(biggest);


const data = [1, -5,[-4, 80], 78, 8]; */

console.log('------=======-------');
function maxSkaicius(sarasas) {
    let didziausias = -Infinity;
    let didziausiasVaikas = 0;
    for (let index = 0; index < sarasas.length; index++) {
        const skaicius = sarasas[index];

        if (Array.isArray(skaicius)) {
            didziausiasVaikas = maxSkaicius(skaicius)
            if (didziausias < didziausiasVaikas) {
                didziausias = didziausiasVaikas;
            }
        } else { 
            if (didziausias < skaicius) {
                didziausias = skaicius;
            }
        }
        
    }
    return didziausias;
}

const skaicius = [10, 5, 0,[ 15,[100,[201,[37, 45],[2021], 202], 200], 13, 6], 67, -5, 74, 8]

console.log(maxSkaicius(skaicius));