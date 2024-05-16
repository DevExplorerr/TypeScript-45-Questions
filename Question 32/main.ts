let current_users: string[] = ["Talha", "Saad", "Yousuf", "Arsal", "John"];
let new_users: string[] = ["talha", "Saad", "Alexa", "Lucas", "benjamin"];


function isUserNameAvailable(username: string): boolean {
    for (let i = 0; i < current_users.length; i++) {
        if (current_users[i].toLowerCase() === username.toLowerCase()) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < new_users.length; i++) {
    if (isUserNameAvailable(new_users[i])) {
        console.log(`The username '${new_users[i]}' is available.`);
    }
    else {
        console.log(`The username '${new_users[i]}' is already taken. Please choose another one.`);
    }
}