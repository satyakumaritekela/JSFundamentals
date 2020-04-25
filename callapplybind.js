let name = {
    firName: 'Satya Kumar'
}

let printName = function(greetings) {
    console.log(greetings + this.firName)
}

printName.call(name, 'hello ')

printName.apply(name, ['hello '])

let printNawitGRe = printName.bind(name, 'hello ')

printNawitGRe()