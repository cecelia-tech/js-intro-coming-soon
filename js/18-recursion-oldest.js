/*
Gimines medyje reikia rasti kas buvo/yra vyriausias?
*/
function oldest(asmuo) {
    let biggestAge = asmuo.age;
    let childAge = 0;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            childAge = oldest(child);

            if (childAge > biggestAge) {
                biggestAge = childAge;
            }
        }
    }

    return biggestAge;
}

/* function numberCount(asmuo) {
    let nariuKiekis = 1;

    if (asmuo.children) {
        //nariuKiekis += asmuo.children.length;
        for (let index = 0; index < asmuo.children.length; index++) {
            const child = asmuo.children[index];
            nariuKiekis += numberCount(child)
        }
    }

    return nariuKiekis;
} */

function oldestWithName(asmuo) {
    let oldestName = asmuo.name;
    let biggestAge = asmuo.age;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const oldestChild = oldestWithName(child);

            if (oldestChild.age > biggestAge) {
                biggestAge = oldestChild.age;
                oldestName = oldestChild.name;
            }
        }
    }

    return {
        name: oldestName,
        age: biggestAge
    };
}

const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 300,
            children: [
                {
                    name: 'Onute',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas',
                    age: 20,
                    children: [
                        {
                            name: 'Gokas',
                            age: 200
                        }
                    ]
                },
                {
                    name: 'Gabriele',
                    age: 400
                },
            ]
        },
    ]
}
const vyriausias = oldest(gimine1);
console.log(vyriausias);

/* const kieknariu = numberCount(gimine1);
console.log(kieknariu); */

/* const vyriausiasAsmuo = oldestWithName(gimine1);
console.log(vyriausiasAsmuo); */