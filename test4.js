function totalVolume(...arr) {
    let mainresult = 0;
    let result = 1;
    for (let i = 0 ; i < arr.length ; i++) {
        result = 1;
        for (let j = 0 ; j < arr[i].length ; j++) {
            result *= arr[i][j];
        }
        mainresult += result;
    }
    return(mainresult);
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));

