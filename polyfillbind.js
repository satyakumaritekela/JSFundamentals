let name = {
    firName: 'Satya Kumar'
}

let printName = function(greetings, moregreetings) {
    console.log(greetings + this.firName + moregreetings)
}

Function.prototype.mybind = function(...args) {
    let obj = this;
    return function (...args2) {
        obj.apply(args[0], [...args.slice(1),...args2]);
    }    
}

let pName = printName.mybind(name, "hello");

pName("hhhhh");