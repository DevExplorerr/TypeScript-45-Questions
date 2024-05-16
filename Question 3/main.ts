// Saad 4/3/2023
// It is a program to print a name in lowercase , uppercase and in titlecase.
let personName:string = "Muhammad Saad Jamal";

console.log(`LowerCase: ${personName.toLowerCase()}`);

console.log(`UpperCase: ${personName.toUpperCase()}`);

console.log(`Titlecase: ${personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()}`);
