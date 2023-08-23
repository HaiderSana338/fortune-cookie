// Require the Express module
const express = require('express');
// Create an Express web application
const app = express();
// Specify how to respond to GET /
app.get('/', (req, res) => {
res.send('Hello World!');
});
// Start listening for HTTP requests on port 3000

const child_process = require('child_process');
// Create a new Express web application
// Set handler for the index of the website
app.get('/', (req, res) => {
// Run the system `fortune` command and respond with the message
child_process.exec('fortune', (error, message) => {
if(error === null) {
res.send(message);
} else {
res.send('Error: ' + error);
}
})
});
// Start web application server
app.listen(4000, () => {
console.log('Server started');
});
