function isValidIP(str) {
    let ip = str.split(".");
    let check = 0
    for (let i = 0 ; i < ip.length ; i++) {
        if (ip.length == 4 && ip[i][0] != 0 && ip[i] >= 1 && ip[i] <= 255) {
            check++;
        }
    }
    if (check == 4) {
        return(true);
    }
    else{
        return(false);
    }
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));