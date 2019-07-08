// A Promise is an object representing the eventual completion or failure
// of an asynchronous operation. Source: Mozilla
//
// The real benefits of Promises comes from composing Promises across the application
// We can create functions that return Promises, and let errors bubble upstream.

const asyncFunction = () => new Promise(resolve => setTimeout(resolve, 5000));

asyncFunction()
.then(() => console.log("Promise Resolved"))
.catch(()=> console.log("fail"));