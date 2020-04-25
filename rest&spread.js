let array = [1, 2, 3]

/* Spread Operator */

// Pulling out all the elaments of the old array and spreading out into the new array

let newArray = [...array, 'satya']

console.log(newArray)

const person = {
    name: 'satya'
}

const human = {
    ...person,
    'age': 24
}

console.log(human)


/* Rest parameter */

/* Merging a list of function arguments into an array */

const displayHuman = (...args) => {
    console.log(args[0] + args[1]);
}

displayHuman('satya Kumar: ', 24)