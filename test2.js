function highestDigit(num) {
    let splitnum = num.toString().split("");
    let newarr = splitnum.map(e => {
        return(parseInt(e));
    }).sort((a,b) => a-b);
    return(newarr[newarr.length-1]);
} 

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));