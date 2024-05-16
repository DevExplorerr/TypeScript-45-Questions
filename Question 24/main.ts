let str1: string = "hello";
let str2: string = "world";

console.log(str1 === str2); 

console.log(str1 !== str2); 
//==========================================//
let str: string = "Saad Jamal";

console.log(str.toLowerCase() === "Saad jamal");
//==========================================//
let num1: number = 5;
let num2: number = 10;

console.log(num1 == num2); 

console.log(num1 != num2); 

console.log(num1 > num2); 

console.log(num1 < num2); 

console.log(num1 >= num2); 

console.log(num1 <= num2); 
//==========================================//
let num: number = 15;

console.log(num > 10 && num < 20);

console.log(num < 10 || num > 20);
//==========================================//
let array: number[] = [1, 2, 3, 4, 5];

console.log(array.includes(3));
//==========================================//
let arr: number[] = [1, 2, 3, 4, 5];
let itemToCheck: number = 6;

console.log(!arr.includes(itemToCheck));
//==========================================//