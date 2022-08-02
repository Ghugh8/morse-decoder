const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
const dotsAndDashes = expr.replaceAll('11', '-').replaceAll('10', '.').replaceAll("**********", '0 0');
console.log(dotsAndDashes)
const split = /\D+/g;
const massDD = dotsAndDashes.match(split);
console.log(massDD)
let str = '';
for (let i = 0; i <= (massDD.length-1) ; i++) {
    str += MORSE_TABLE[massDD[i]];
}
return (str)
}

console.log(decode("00000000100000111010101010111100111011100000001011111110101011111010101010101010"))

module.exports = {
    decode
}