function simplePair(arr,n) {
    let result = [];
    let check = true;
    for (let i = 0 ; i < arr.length ; i++) {
        if (check == false) {
            break;
        }
        for (let j = 0 ; j < arr.length ; j++) {
            if (arr[i] * arr[j] == n && i != j) {
                result.push(arr[i]);
                result.push(arr[j]);
                check = false;
                break;
            }
        }
    }
    if (result.length == 0) {
        return(null)
    }
    else {
        return(result);
    }
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));