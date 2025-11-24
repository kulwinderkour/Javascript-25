//Does not wait for the current operation to finish.
// Allows the next tasks to start immediately.


console.log("Start");

setTimeout(() => {
    console.log("This runs later");
}, 2000);  // Runs after 2 seconds

console.log("End");
