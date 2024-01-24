function sumTwoSmallestNums(arr) {
    let result = 0;
    let check = 0;
    let clonearr = [...arr].sort((a,b) => a - b);
    
    for (let i = 0 ; i < arr.length ; i++) {
        if (check == 2) {
            break;
        }
        if (clonearr[i] >= 0) {
            result += clonearr[i];
            check += 1;
        }
    }

    return(result);
}

console.log(sumTwoSmallestNums([2,9,6,-1]));