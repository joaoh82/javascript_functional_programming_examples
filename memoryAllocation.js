const a = [3, 4, 2,1, 6, 5, 7];
console.log(`a = ${a}`)
const b = [...a]
const c = new Array(...a)
b.sort()
console.log(`sorted b = ${b}`);
console.log(`a = ${a}`);
console.log(`c = ${c}`);

// Alternative array cloning methods
// var copy = [...arr]; // spread operator
// var copy = arr.concat();
// var copy = Array.from(arr);
// var copy = new Array(...arr);

console.log(typeof(42));

function logThis() {
    this.desc = "logger";
    console.log(this)
}

new logThis();