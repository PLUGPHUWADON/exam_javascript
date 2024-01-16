function sumTwoSmallestNums(arr) {
    let check = 0;
    let result = 0;
    let newarr = arr.map(e => e).sort((a,b) => a-b);
    for (let i = 0 ; i < newarr.length ; i++) {
        if (newarr[i] >= 0) {
            if (check <= 1) {
                result += newarr[i];
                check++;
            }
        }
    }
    return(result);
}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,34535455353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));