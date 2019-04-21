// Filter method creates a new array with all elements that pass the test implemented provided function.
// Function must return a boolean
var animals = [
    { name: 'FLuffykins', species:'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' }, 
    { name: 'Harold', species: 'fish' },
    { name: 'Ursule', species: 'cat' }, 
    { name: 'Jimmy', species: 'fish' }
]

var filteredAnimalsFilter = animals.filter(animal => animal.species === 'dog')
console.log(filteredAnimalsFilter)

// For Loop implementing the same code for comparison.
var filteredAnimals = []
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        filteredAnimals.push(animals[i])
    }
}
console.log(filteredAnimals)