function totalVolume(...arr) {
    let result = 0;
    let sum = 1;

    for (let i = 0 ; i < arr.length ; i++) {
        sum = 1;
        for (let j = 0 ; j < arr[i].length ; j++) {
            sum *= arr[i][j];
        }
        result += sum;
    }

    console.log(result)
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));