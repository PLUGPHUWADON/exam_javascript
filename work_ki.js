
function findWords(words, chars) {
    let output = [];
    let i = 0 , j = 0 , k = 0;
    while(i < words.length) {
        let position = 0;
        j = 0;
        while(j < words[i].length) {
            k = 0;
            while(k < chars.length) {
                if (words[i][j] == chars[k]) {
                    position++;
                    break;
                }

                k++;
            }
            if (words[i].length == position) {
                output.push(words[i]);
            }

            j++;
        }

        i++;
    }

    let ascii = 0;
    let asciiobj = output.map(el => {
        ascii = 0;
        for (let i = 0 ; i < el.length ; i++) {
            ascii += el.charCodeAt(i);
        }
        return({keystr:el,keyascii:ascii});
    }).sort((k,c) => c.keyascii - k.keyascii).map(el => el.keystr);
    
    return(asciiobj);
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