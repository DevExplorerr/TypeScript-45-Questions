"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    let ordinal;
    if (numbers[i] === 1) {
        ordinal = "st";
    }
    else if (numbers[i] === 2) {
        ordinal = "nd";
    }
    else if (numbers[i] === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${numbers[i]}${ordinal}`);
}
