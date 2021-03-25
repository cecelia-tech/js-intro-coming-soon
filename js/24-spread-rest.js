// ...   ...   spread ...   ...   

const spread1 = [5, 9, 6, 3];
console.log(spread1);

const spread2 = [...spread1, 7];
console.log(spread2);

const spread3 = [7, 77, 777, ...spread1];
console.log(spread3);
console.log('------');

//*********************** */
// rest operatorius su funkcija
const average = (...list) => {
    console.log(list);
};

//average([10, 2, 8, 4, 8]);
average(10, 2, 8, 4, 8); //neturi buti [( )]

/**************** primityvios reiksmes */
let a = 5;
let b = 999;

b=a;
console.log(a);
console.log(b);

a = 777;
console.log(a);
console.log(b);

console.log('*******');

/* kompleksines reiksmes */

let cc = [4, 44];
let dd = [8, 88];

console.log(cc);
console.log(dd);

dd = cc;
console.log(cc);
console.log(dd);

cc[0] = 111; // sita reiksme pereina i abi reiksmes
console.log(cc);
console.log(dd);