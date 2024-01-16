function removeDups(arr) {
    let arrnew = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if (i == 0) {
            arrnew.push(arr[0]);
        }
        if (!arrnew.join("").includes(arr[i])) {
            arrnew.push(arr[i]);
        }
    }
    return(arrnew)
}

console.log(removeDups([1,0,1,0,1]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));