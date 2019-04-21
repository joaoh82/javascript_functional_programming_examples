var animals = [
    { name: 'FLuffykins', species:'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' }, 
    { name: 'Harold', species: 'fish' },
    { name: 'Ursule', species: 'cat' }, 
    { name: 'Jimmy', species: 'fish' }
]

var filteredAnimalsFilter = animals.filter(function(animal){
    return animal.species === 'dog'
})
console.log(filteredAnimalsFilter)

var filteredAnimals = []
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        filteredAnimals.push(animals[i])
    }
}
console.log(filteredAnimals)