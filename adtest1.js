function canMove(name,s1,s2) {
    let arr2 = ["A","B","C","D","E","F","G","H"];

    let stay1 = arr2.indexOf(s1[0]);
    let stay2 = parseInt(s1[1]);
    let to1 = arr2.indexOf(s2[0]);
    let to2 = parseInt(s2[1]);

    if (name == "rook") {
        if (stay2 == to2 && (to2 >= 8 || to2 <= 8)) {
            return(true);
        }
        else if (stay1 == to1 && (to2 >= 8 || to2 <= 8)) {
            return(true);
        }
        else {
            return(false);
        }
    }

    if (name == "knight") {
        if ((stay1 - 2 == to1 && stay2 + 1 == to2) || (stay1 + 2 == to1 && stay2 + 1 == to2)) {
            return(true);
        }
        else if ((stay1 - 2 == to1 && stay2 - 1 == to2) || (stay1 + 2 == to1 && stay2 - 1 == to2)) {
            return(true);
        }
        else if ((stay2 + 2 == to2 && stay1 - 1 == to1) || (stay2 + 2 == to2 && stay1 + 1 == to1)) {
            return(true);
        }
        else if ((stay2 - 2 == to2 && stay1 - 1 == to1) || (stay2 - 2 == to2 && stay1 + 1 == to1)) {
            return(true);
        }
        else {
            return(false);
        }
    }

    if (name == "king") {
        if ((Math.abs(stay1 - to1) == 1 && Math.abs(stay2 - to2) == 0) || (Math.abs(stay1 - to1) == 0 && Math.abs(stay2 - to2) == 1) || (Math.abs(stay1 - to1) == 1 && Math.abs(stay2 - to2) == 1)) {
            return(true)
        }
        else {
            return(false)
        }
    }

    if (name == "bishop") {
        if (Math.abs(stay1 - to1) == Math.abs(stay2 - to2)) {
            return(true);
        }
        else {
            return(false);
        }
    }

    if (name == "queen") {
        if (Math.abs(stay1 - to1) == Math.abs(stay2 - to2) || (stay1 - to1 == 0 || stay2 - to2 == 0)) {
            return(true);
        }
        else {
            return(false);
        }
    }

    if (name == "pawn") {
        let check = true;
        if (stay1 - to1 == 0) {
            if (check == true) {
                if (to2 - stay2 == 2) {
                    check = false;
                    return(true);
                }
            }
            if (to2 - stay2 == 1) {
                return(true)
            }
            else {
                return(false);
            }
        }
        else {
            return(false);
        }
    }  
}

console.log(canMove("pawn","D1","D1"));