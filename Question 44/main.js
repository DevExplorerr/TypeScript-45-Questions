"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(...items) {
    console.log("Making a sandwich with:");
    if (items.length === 0) {
        console.log(" - Just bread, I guess!");
    }
    else {
        for (let i = 0; i < items.length; i++) {
            console.log(` - ${items[i]}`);
        }
    }
    console.log("Enjoy your sandwich!");
}
make_sandwich("Cheese", "Lettuce", "Tomato", "Onion");
make_sandwich("Peanut Butter", "Jelly");
make_sandwich();
