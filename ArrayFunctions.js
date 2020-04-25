const num = [1, 2, 3, 4, 3, 2]

const mapArray = num.map((n) => {
    return n * 2;
})

const filArray = num.filter((n) => {
    return n == 2;
})

console.log(mapArray)
console.log(filArray)

/* Reduce function */

// This accepts four attributes accumulator, current index, current value and the initial value

const redArray = num.reduce((allNumbers, number) => {
                    (number in allNumbers) ? allNumbers[number]++ : allNumbers[number] = 1;
                    return allNumbers;
}, {});
                
console.log(redArray)