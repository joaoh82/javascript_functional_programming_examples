import _ from 'lodash' // Importing lodash to use the curry feature

let dragons = [
    { name: 'fluffukins', element: 'lightning' },
    { name: 'noomi', element: 'lightning' },
    { name: 'karo', element: 'fire' },
    { name: 'doomer', element: 'timewarp' }
]

// Using _.curry here we are transforming the hasElement function into curryable
let hasElement = _.curry((element, obj) => obj.element === element)

// Now I can use the hasElement inside the filter function
let lightningElement = dragons.filter(hasElement('lightning'))

console.log(lightningElement)