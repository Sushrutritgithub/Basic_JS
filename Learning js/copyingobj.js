// Example of reference assignment in JavaScript
let user = {
    name: 'john',
    age: 30
};

// Copy the reference of user to admin
let admin = user; 
console.log(admin.age);  // 30
console.log(admin.name); // 'john'

// Example of reference comparison
let a = {};
let b = a;

// Comparing if two references point to the same object
console.log(a == b); // true
console.log(a === b); // true

// Comparing two different objects
let c = {};
let d = {};
console.log(c == d); // false
console.log(c === d); // false

// Cloning an object using a loop
let clone = {};
for (let i in user) {
    clone[i] = user[i];
}

console.log(clone.name); // 'john'

// Modifying the clone and showing that it doesn't affect the original object
clone.name = 'Jonny';
console.log(clone.name); // 'Jonny'
console.log(user.name); // 'john' (remains unchanged)

// Using Object.assign to merge another object into user
let id = { id: 1223 };
Object.assign(user, id);
console.log(user.id); // 1223
