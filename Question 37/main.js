"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I Love TypeScript") {
    console.log(`Printing a ${size}-sized shirt with the message of: "${message}"`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello Governor Sindh");
