function checkpassword(str) {
    let clonestrarr = str.split("");
    let result = "";

    let ss = "!@#%^&*()_+=\\-/,.<>?";
    let letters = new RegExp(`[${ss}]`);

    if (!clonestrarr.some(ch => {if (ch >= "A" && ch <= "Z") {return(true)}})) {
        result += "no uppercase \n";
    }

    if (!clonestrarr.some(ch => {if (ch >= "a" && ch <= "z") {return(true)}})) {
        result += "no lowercase \n"
    }

    if (!clonestrarr.some(num => {if (num >= 0 && num <= 9) {return(true)}})) {
        result += "no number \n";
    }

    if (str.length < 8) {
        result += "letter < 8 \n";
    }

    if (clonestrarr.join("").includes(" ")) {
        result += "no space \n";
    }

    if (!letters.test(str)) {
        result += "no letters \n";
    }

    let a = "geoatecode";
    if (new RegExp(`[${a}]`).test("gote")) {
        console.log('A')
    }

    return(result);
}

//console.log(checkpassword("aaaaaaaaBB"));
console.log(checkpassword("1234567@Ae8"));
//console.log(checkpassword("1234567@80@"));
//console.log(checkpassword("1234567@Az8"));
//console.log(checkpassword("123 Az8"));