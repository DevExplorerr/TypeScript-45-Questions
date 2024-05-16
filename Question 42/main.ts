function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let magicians: string[] = ["Merlin", "Gandalf", "Harry Potter"];

make_great(magicians);

show_magicians(magicians);
