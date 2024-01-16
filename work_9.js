let count = 0;
let asciivalue = 0;

function findWords(words, chars) {
    let arr = [];
    for (let i = 0 ; i < words.length ; i++){
        count = 0;
        asciivalue = 0;
        for (let j = 0 ; j < chars.length ; j++) {
            if (words[i].includes(chars[j])) {
                count += Array.from(words[i].matchAll(chars[j])).length;
                for (let loopas = 0 ; loopas < Array.from(words[i].matchAll(chars[j])).length ; loopas++) {
                    asciivalue += Array.from(words[i].matchAll(chars[j])).join("").charCodeAt(loopas);
                }
            }
            if (words[i].length == count) {
                arr.push({keyword:words[i],keyascii:asciivalue});
                break;
            }
        }
    }

    let arrsort = arr.map(e => e).sort((a,b) => b.keyascii - a.keyascii).map(e => e.keyword);

    return(arrsort)
}

const words = ["cherry", "date",  "honeydew",   "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't',];

const result = findWords(words, characters);
console.log(result);

const words2 = ["date","fig","mango"];
const characters2 = ['a', 't', 'e', 'm', 'n', 'g', 'o', 'f', 'i'];

const result2 = findWords(words2, characters2);
console.log(result2);


const words3 = ["apple", "banana", "orange","kiwi"];
const characters3 = ['a', 'p', 'l', 'e', 'o', 'r', 'n', 'g'];

const result3 = findWords(words3, characters3);
console.log(result3);


module.exports = { findWords };