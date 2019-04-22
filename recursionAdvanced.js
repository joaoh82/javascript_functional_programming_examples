let categories = [
    { id: 'animals', 'parent': null},
    { id: 'mamals', 'parent': 'animals'},
    { id: 'cats', 'parent': 'mamals'},
    { id: 'dogs', 'parent': 'mamals'},
    { id: 'chihuaua', 'parent': 'dogs'},
    { id: 'ladrador', 'parent': 'dogs'},
    { id: 'persian', 'parent': 'cats'},
    { id: 'siamese', 'parent': 'cats'}
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id));
    return node
}

console.log(
    JSON.stringify(makeTree(categories, null), null, 2)
)

// Expected Result
// {
//     animals: {
//         mamals: {
//             dogs: {
//                 chihuaua: null
//                 ladrador: null
//             }
//             cats: {
//                 persian: nul
//                 siamese: null
//             }
//         }
//     }
// }