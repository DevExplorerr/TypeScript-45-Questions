let guests:string[] = ["Talha", "Yousuf", "Hamza", "Saad"]
console.log("Due to a delay, the dinner table won't arrive in time. I can only invite two people for dinner.");

while (guests.length > 2){
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I can't you to dinner.`);
}

for (let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, you're till invited to dinner`);
}

guests.splice(0, guests.length);
console.log(guests);
