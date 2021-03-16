

const text = 'abcdef';
let reverse = '';

//for ( let i = text.length; i>0; i--) {
//    reverse += text[i - 1];
//}
//console.log(text + '->' + reverse );

for ( let i = 0; i< text.length; i++) {
    reverse += text[text.length -1 - i];
}
console.log(text + '->' + reverse );