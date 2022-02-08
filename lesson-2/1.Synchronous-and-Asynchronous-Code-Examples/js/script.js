// What is a Synchronous System?
// In a synchronous system, tasks are completed one after another.

// Think of this as if you have just one hand to
// accomplish 10 tasks. So, you have to complete one task at a time.
// https://giphy.com/gifs/ICIS16DkE9qB9HVxtq

//
// What is an Asynchronous System?
//     In this system, tasks are completed independently.
//     Here, imagine that for 10 tasks, you have 10 hands. So, each hand can do each task independently and at the same time.
//
//     Take a look at the GIF 👇 – you can see that each image loads at the same time.

// https://giphy.com/gifs/MMDnmJnE7uhX6KtcKc

// Synchronous system, three images are in the same lane. One can't overtake the other. The race is finished one by one. If image number 2 stops, the following image stops.

// Synchronous Code Example

console.log(" I ");

console.log(" eat ");

console.log(" ice cream ");

// Let's say it takes two seconds to eat
// some ice cream. Now, let's test out an asynchronous system.
// Write the below code in JavaScript.

console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
    console.log("eat");
},2000)

console.log("Ice Cream");

// Now that you know the difference between synchronous and async operations,

function printMessage(message) {
    // i want to check if there is no message
    // i want to assign text to this message
    // i want to console.log this message
    if(!message) {
        message = "no value is here";
    }
    console.log(message)
}
printMessage()

// default value for the property argument

function printMessageTwo(message = "no value is here") {
    console.log(message)
}
//printMessageTwo()
printMessageTwo("hello chris is here");



// example 3

function getSum(numA = 0, numB = 0) {
    return numA + numB;
}

const totalSum = getSum(4, 4);

console.log("totalSum: " + totalSum);

// same over and under

const totalSumTwo = getSum();

console.log(totalSumTwo);