let places:string[] = ["Paris", "London", "New York", "Turkey", "Iceland"]

console.log("Original Order:", places[0]);

console.log("Alphabetical Order:", [...places].sort());

console.log("Original Order:", places);

console.log("Reverse Alphabetical Order:", [...places].sort().reverse());

console.log("Original Order:", places);

places.reverse();
console.log("Reversed Order:", places);

places.reverse();
console.log("Original Order:", places);

places.sort();
console.log("Alphabetical Order:", places);

places.reverse();
console.log("Reverse Alphabetical Order:", places);