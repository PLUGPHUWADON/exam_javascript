const output = [];
function findWords(words, chars) {
    for (const word of words) {
        let isWordValid = true;

        for (const char of word) {
            if (!chars.includes(char)) {
                isWordValid = false;
                break;
            }
        }

        if (isWordValid) {
            output.push(word);
        }
    }

    const sortedWords = output.sort((a, b) => {
        const sumAsciiA = a.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const sumAsciiB = b.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        return sumAsciiB - sumAsciiA;
    });

    return sortedWords;
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

const words4 = ["nectarine", "lemon", "kiwi"];
const characters4 = ['k','i','w','l','e','m','o','n','c','a','r','t','i','n'];

const result4 = findWords(words4, characters4);
console.log(result4);


module.exports = { findWords };
