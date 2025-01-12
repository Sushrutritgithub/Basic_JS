let user = {
    name: 'john',
    age: 30
}
let admin = user; // copy the refference
console.log(admin.age);
console.log(admin.name);
let a = {};
let b = a;
console.log(a == b);
console.log(a === b);

let c = {};
let d = {};
console.log(c == d);
console.log(c === d);

// clloning object
let clone = {};
for(let i in user){
    clone[i] = user[i];
}
console.log(clone.name);
clone.name = 'Jonny';
console.log(clone.name);
console.log(user.name);

let id = { id: 1223};
Object.assign(user, id);
console.log(user.id);