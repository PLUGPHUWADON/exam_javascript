function highestDigit(num) {
    let arrnumstr = num.toString().split("");

    let clonearr = arrnumstr.map(e => e).sort((a,b) => b - a);

    return(clonearr[0]);
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(7));