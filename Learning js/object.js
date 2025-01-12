// Object literal definition for a user
let user = {
    name: 'John',
    age: 30,
    lang: 'eng',
    size: {
        height: '181 cm',
        weight: '75 kg'
    },
    // Method to say hi
    sayhi() {
        alert(this.name);
    },
    "like birds": true // Property with a space in its name
};

// Example of accessing properties
// console.log(user.name); // Accessing with dot notation
// console.log(user["like birds"]); // Accessing with square bracket notation for property with spaces

// Using for-in loop to iterate over properties of the user object
for (let key in user) {
    console.log(user[key]); // Output each property value
}

// Computed properties: dynamic property names based on variables
let vegitables = prompt("Which vegetable to buy?", 'carrot');
let bag = {
    [vegitables]: 5, // Property name comes from the variable 'vegitables'
};
console.log(bag.carrot); // Logs the value for carrot
alert(bag.carrot); // Shows an alert with the value of 'carrot'

// More dynamic property names
let fruit = 'apple';
let bagg = {
    [fruit + 'Computers']: 5 // Dynamic property name combining 'fruit' and 'Computers'
};
console.log(bagg.appleComputers); // Logs the value of appleComputers
alert(bagg.appleComputers); // Shows an alert with the value of appleComputers

// Property value shorthand: when the property name is the same as the variable name
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}
let newUser1 = makeUser("John", 30);
// alert(newUser1.name); // Shows alert with user's name
// alert(newUser1.age);  // Shows alert with user's age

// With shorthand property notation
function makeUser1(name, age) {
    return {
        name,  // Shorthand for name: name
        age,   // Shorthand for age: age
    };
}
let newUser2 = makeUser1("Jonathan", 30);
// alert(newUser2.name); // Shows alert with new user's name
// alert(newUser2.age);  // Shows alert with new user's age

// The 'in' operator to check if a property exists in an object
// alert('age' in newUser2);  // true as 'age' is a property in the object
// alert('weight' in newUser2); // false as 'weight' is not a property
