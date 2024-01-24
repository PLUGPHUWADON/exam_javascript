function numberSplit(num) {
    let result = [];
    let num1 = Math.floor(num / 2);
    let num2 = num - num1;

    result.push(num1);
    result.push(num2);

    return(result);
}

console.log(numberSplit(-9));