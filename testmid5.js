function getBudgets(arr) {
    let restult = 0;

    for (let i = 0 ; i < arr.length ; i++) {
        restult += arr[i].budget;
    }

    return(restult);
}

console.log(getBudgets([
    {},
    {},
]));