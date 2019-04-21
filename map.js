// A Map method creates a new array with the results of calling a provided function
// on every element in the array
// Function can return any transformation of the element in the array
var animals = [
    { name: 'FLuffykins', species:'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' }, 
    { name: 'Harold', species: 'fish' },
    { name: 'Ursule', species: 'cat' }, 
    { name: 'Jimmy', species: 'fish' }
]

var namesMap = animals.map(animal =>  animal.name + ' is a ' + animal.species)
console.log(namesMap)

var names = []
for (let i = 0; i < animals.length; i++) {
    names.push(animals[i].name + ' is a ' + animals[i].species)
}
console.log(names)