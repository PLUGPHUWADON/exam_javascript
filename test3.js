function capToFront(str) {
    let arr = [];
    for (let i = 0 ; i < str.length ; i++) {
        if (str[i] == str[i].toUpperCase()) {
            arr.push(str[i]);
        }
    }
    for (let i = 0 ; i < str.length ; i++) {
        if (str[i] == str[i].toLowerCase()) {
            arr.push(str[i]);
        }
    }
    return(arr.join(""));
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
