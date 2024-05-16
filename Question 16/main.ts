let guests: string[] = ["Talha", "Yousuf", "Hamza", "Saad"]
console.log("Great News! I have found a bigger dinning table!");

//Adding more guests
guests.push("Hassan")
guests.splice(guests.length / 2, 0, "Aashir")
guests.push("Rafay")

for (let i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}