const usernames: string[] = ['admin', 'Saad', 'Talha', 'Yousuf', 'Arsal'];

function greetUser(username: string): void {
  if (username.toLowerCase() === 'admin') {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

for (let i = 0; i < usernames.length; i++) {
  greetUser(usernames[i]);
}
