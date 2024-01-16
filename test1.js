function numberSplit(num) {
    let arr = [];
    let num1 = num / 2;
    arr.push(parseInt(num1));
    let num2 = num - parseInt(num1);
    arr.push(parseInt(num2));
    return(arr);
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));