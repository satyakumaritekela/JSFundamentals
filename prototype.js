let name = {
    firstName: 'Satya Kumar',
    lastName: 'Itekela'
}

let person = {
    firstName: 'Satya Kumar',
    lastName: 'Itekela',
    age: 24,
    city: 'kurnool'
}

// __proto__ is used for the inherting the properties and functions of the assigned object
// and also __proto__ is like an objct of prototype which is like a blueprint or class
name.__proto__ = person;

console.log(name.city);

console.log(name.__proto__.__proto__ === Object.prototype)