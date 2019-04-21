// Currying is when a function does not take all of its arguments upfront
// Instead it returns another function which it would take the second argument
// And so on, until all the arguments have been provided and the on the last step
//  it actually returns a result
// The idea is that your function can gradually receive all the arguments it needs
// Which can be usefull in several occasions.

// Regular function receiving 3 arguments at once
let dragon = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' + 
    element + '!'
console.log(dragon('fluffykins', 'tiny', 'lightning'))

// Here it is an example of a curried function
let dragonCurried =
    name => // Function returned
        size => // Function returned
            element => // Returning actual result
                name + ' is a ' +
                size + ' dragon that breathes ' + 
                element + '!'
console.log(dragonCurried('fluffykins')('tiny')('lightning'))

// Here I am assign the value of the first function to a variable
// and using it in the console.
let fluffykinsDragon = dragonCurried('fluffykins')
console.log(fluffykinsDragon('tiny')('lightning'))

let tinyFluffykinsDragon = fluffykinsDragon('tiny')
console.log(tinyFluffykinsDragon('lightning'))