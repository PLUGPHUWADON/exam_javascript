function removveDups(arr) {
    let result = [];

    for (let i = 0 ; i < arr.length ; i++) {
        if (i == 0) {
            result.push(arr[0]);
        }
        if (!result.join("").includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return(result);
}

console.log(removveDups([1,0,1,0]));