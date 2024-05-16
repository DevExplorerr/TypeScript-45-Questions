function make_shirt(size: string = "large", message: string = "I Love TypeScript"): void {
    console.log(`Printing a ${size}-sized shirt with the message of: "${message}"`);
}

make_shirt();
make_shirt("medium")
make_shirt("small", "Hello Governor Sindh")