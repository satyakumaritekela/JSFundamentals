/** classes are the blue print for the objects **/

class Person {
    constructor() {
        this.name = 'Satya';
        this.age = 24;
    }

    displayName() {
        console.log(this.name);
    }
}

const p = new Person()
p.displayName();

/* ES6 features */
class Human {
    name = 'Satya Kumar Itekela'

    displayName = () => {
        console.log(this.name);
    }
}

const h = new Human()
h.displayName()