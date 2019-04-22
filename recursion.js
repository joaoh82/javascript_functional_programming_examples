// Recursion is basically when a function calls itself
// until it doesn't. And it is heavyly used in all programming languages
// Like Erlang, for example.

let countDownFrom = (num) => {
    if (num === 0) return
    console.log(num)
    countDownFrom(num-1)
}

countDownFrom(10)
