#!/usr/bin/env node

const { exec } = require("child_process");

// Set your static IP address and port here
const ip = "10.254.254.254";
const port = "3000";        

console.log(`Starting React app on http://${ip}:${port}`);

// Command to start the React app with the specified host and port
const command = `cross-env HOST=${ip} PORT=${port} react-scripts start`;

// Execute the command
const reactStart = exec(command);

// Output the logs from the React start process
reactStart.stdout.on("data", (data) => {
    console.log(data);
});

reactStart.stderr.on("data", (data) => {
    console.error(data);
});
