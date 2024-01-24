function frequencySort(str) {
    let clone = str;
    let arrcountlength = [];
    let word = "";
    let letter = "";

    for (let i = 0 ; i < str.length ; i++) {
        if (clone.includes(str[i])) {
            let arr = Array.from(clone.matchAll(str[i]));
            for (let j = 0 ; j < str.length ; j++) {
                clone = clone.replace(str[i],"");
            }
            arrcountlength.push(arr.flat());
        }
    }

    let sortlength = arrcountlength.map(e => e.join("")).sort().sort((a,b) => b.length - a.length);

    return(sortlength);
}

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaakkkk"));
console.log(frequencySort("bbAa"));