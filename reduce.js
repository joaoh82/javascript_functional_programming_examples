// A Reduce method executes a reducer function (provided by you) on 
// each member of the array, resulting in a single value.
// A common example is to accumulate the sum of several number elements
var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
]

var totalAmountReduce = orders.reduce((sum, order) => sum + order.amount, 0)
console.log("reduce", totalAmountReduce)

// For Loop implementing the same for comparison.
var totalAmount = 0
for (let i = 0; i < orders.length; i++) {
     totalAmount += orders[i].amount    
}
console.log("for loop", totalAmount)