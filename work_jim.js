let countlength = 0;
let countchars = 0;


function findWords(words, chars) {
    let resultwords = [];
    for (let i = 0 ; i < words.length ; i++) {
      countlength = 0;
      countchars = 0;
      for (let j = 0 ; j < chars.length ; j++) {
        countlength = words[i].length;
        if (words[i].match(chars[j])) {
            countchars += Array.from(words[i].matchAll(chars[j])).length;
        }
        if (countlength === countchars) {
            resultwords.push(words[i]);
            countlength = 0;
            countchars = 0;
        }
      }
    }
    
    let objectword = [];
    let coutletterascii = 0;
    for (let i = 0 ; i < resultwords.length ; i++) {
        for (let j = 0 ; j < resultwords[i].length ; j++) {
            coutletterascii += resultwords[i].charCodeAt(j);
        }
        objectword.push({word:resultwords[i],sumascii:coutletterascii});
        coutletterascii = 0;
    }

    let sortobjectwords = objectword.map(e => e).sort((a,b) => b.sumascii - a.sumascii).map(e => e.word);
    
    return(sortobjectwords);
}

const words = ["cherry", "date",  "honeydew",   "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];

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