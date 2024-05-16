"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guests = ["Ali", "Talha", "Yousuf", "Hamza"];
let unableToAttend = "Ali";
console.log(`${unableToAttend} can't make it to dinner.`);
//Replacing the guest
let newGuest = "Saad";
Guests[Guests.indexOf(unableToAttend)] = newGuest;
// New Invitations
for (let i = 0; i < Guests.length; i++) {
    console.log(`Dear ${Guests[i]}, you're invited to dinner. Please let me know if you can attend.`);
}
