// setTimeout(() => {
//     console.log("Set time - 1")
// })

// setTimeout(() => {
//     console.log("Set time - 2")
// })

// setTimeout(() => {
//     console.log("Set time - 3")
// })

// process.nextTick(() => {
//     console.log("This is the process nextTick - 1")
// })


// process.nextTick(() => {
//     console.log("This is the process nextTick - 2")

//     process.nextTick(() => {
//     console.log("This is the inner nextTick - 1")
// })
// })


// process.nextTick(() => {
//     console.log("This is the process nextTick - 3")
// })


// Promise.resolve().then(() => {
//     console.log("This is the promice resolve - 1")
// })

// Promise.resolve().then(() => {
//     console.log("This is the promice resolve - 2");

//     process.nextTick("This is the inner nextTick - 2")
// })

//! Example - 2

/*
setTimeout(() => {
    console.log("Set time - 1")
})

setTimeout(() => {
    console.log("Set time - 2")

    process.nextTick(() => {
        console.log("This is the inner nextTick inside setTimeout")
    })
})

setTimeout(() => {
    console.log("Set time - 3")
})

process.nextTick(() => {
    console.log("This is the process nextTick - 1")
})


process.nextTick(() => {
    console.log("This is the process nextTick - 2")

    process.nextTick(() => {
    console.log("This is the inner nextTick - 1") // this will execute aftr nextTick - 3
})
})


process.nextTick(() => {
    console.log("This is the process nextTick - 3")
})


Promise.resolve().then(() => {
    console.log("This is the promice resolve - 1")
})

Promise.resolve().then(() => {
    console.log("This is the promice resolve - 2");

    process.nextTick(() => {
        console.log("This is the inner nextTick inside promice then block")
    })
});

Promise.resolve().then(() => {
    console.log("This is the promice resolve - 3");
})

*/

//! Example - 3


// import fs from 'fs';


// setTimeout(() => console.log("this is setTimeout 1"), 0);

// fs.readFile("./flow.txt", () => {
//   console.log("this is readFile 1");
// });

// here we cannot predict the order of exeecution of these statements as there can be two possible ordrings, timer of 0 milliseconds is set to at least 1 ms by c++ code.
//? so if event loop enters as 0.5 ms, the setTimeout timer os not expired yet, therefor no callback inside timer queue, so eent loop will go to next phase.
// If event loop enters at 1.25 ms, now the timer has expired, therefor callback inside timer queue will be executed, then event loop will go to next-phase.


//! Example - 4

// index.js
import fs from 'fs';

fs.readFile("./flow.txt", () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 2000000000; i++) { }
console.log("for loop Executed..!");

