let wordslength = 0;

function findWords(words, chars) {
    let w1 = [];
    for (let i_w = 0 ; i_w < words.length ; i_w++) {
        wordslength = 0;
        for (let i_s = 0 ; i_s < words[i_w].length ; i_s++) {
            for (let i_ch = 0 ; i_ch < chars.length ; i_ch++) {
                if (words[i_w][i_s] == chars[i_ch]) {
                    wordslength += 1;
                    break;
                }
            }
        }
        if (words[i_w].length == wordslength) {
            w1.push(words[i_w]);
        }
    }

    let ow1 = w1.map(e => {
        let totalascii = 0;
        for (let i = 0 ; i < e.length ; i++) {
            totalascii += e.charCodeAt(i);
        }
        return({w:e,as:totalascii});
    });

    let sortow1 = ow1.map(e => e).sort((a,b) => b.as - a.as);
    let output = sortow1.map(e => e.w);
    
    return(output);
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