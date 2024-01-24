function capToFront(str) {
    let upercase = [];
    let lowercase = [];

    for (let i = 0 ; i < str.length ; i++) {
        if (str[i] == str[i].toUpperCase()) {
            upercase.push(str[i]);
        }
        else if (str[i] == str[i].toLowerCase()) {
            lowercase.push(str[i]);
        }
    }

    return(upercase.join("") + lowercase.join(""));
}

console.log(capToFront("hApPy"));