// A Closure is the combination of the scope of a function and
// the lexical environment within which that function was declared
var me = 'Bruce Wayne' // Declaring variable me
console.log('me', me)
function greetMe() {
    console.log('Hello, ' + me + '!') // Using variable me with the value from the moment it was called
}
me = 'Batman'
greetMe()