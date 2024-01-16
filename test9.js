function digittalClock(num) {
    let hour = Math.floor(num / 60 / 60 % 24);
    let min = Math.floor((num / 60) % 60);
    let sec = num % 60;

    return(`${hour}:${min}:${sec}`)
}

console.log(digittalClock(5025));
console.log(digittalClock(61201));
console.log(digittalClock(87000));