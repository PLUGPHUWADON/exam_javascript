let animals = [
    "dog","cat","bat","cock","cow","pig",
    "fox","ant","bird","lion","wolf","deer",
    "bear","frog","hen","mole","duck","goat"
];

function count_animals(str) {
    let result1_dimension = [];
    let result2_dimension = [];
    let gettext = "";
    let clonestr = str;
    let countlength = 0;
    let checkword = false;

    let count_group_animals = 1;
    let check_back_animals = false;
    let i = 0;
    let j = 0;
    while(i < animals.length) {
        countlength = 0;
        j = 0;
        while(j < animals[i].length) {
            if (str.includes(animals[i][j])) {
                countlength++;
            }
            if (countlength == animals[i].length) {
                result1_dimension.push(animals[i]);
                gettext = animals[i];
                for (let k = 0 ; k < gettext.length ; k++) {
                    str = str.replace(gettext[k],"");
                }
                checkword = true;
            }
            else {
                checkword = false;
            }
            j++;
        }

        //check loop i
        if (checkword == true) {
            i = i;
        }
        else {
            i++;
        }

        if (i == animals.length - 1) {
            if (check_back_animals == true) {
                i = 0;
                check_back_animals = false;
            }
        }

        if (check_back_animals == false) {
            if (i == animals.length - 1) {
                if (count_group_animals > animals.length) {
                    break;
                }
                result2_dimension.push(result1_dimension);
                result1_dimension = [];
                i = count_group_animals;
                count_group_animals++;
                str = clonestr;
                check_back_animals = true;
            }
        }
    }

    let sortarr = result2_dimension.map(e => e).sort((a,b) => b.length - a.length)
    
    return(sortarr[0]);
}

console.log(count_animals("goatcode"));
console.log(count_animals("cockdogwdufrbir"));
console.log(count_animals("dogdogdogdogdog"));