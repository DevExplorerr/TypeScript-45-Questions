"use strict";
function city_country(city, country) {
    return `${city}, ${country}`;
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let magicians = ["Merlin", "Gandalf", "Harry Potter"];
make_great(magicians);
show_magicians(magicians);
