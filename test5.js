function getBudgets(arrob) {
    let result = 0;
    for (let i = 0 ; i < arrob.length ; i++) {
        result += arrob[i].budget;
    }
    return(result);
}

console.log(getBudgets([
    {name: "john" , age : 21 , budget: 23000},
    {name: "steve" , age : 32 , budget: 40000},
    {name: "margin" , age : 16 , budget: 2700},
]));
console.log(getBudgets([
    {name: "john" , age : 21 , budget: 29000},
    {name: "steve" , age : 32 , budget: 32000},
    {name: "margin" , age : 16 , budget: 1600},
]));