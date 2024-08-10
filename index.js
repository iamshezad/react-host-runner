#!/usr/bin/env node

const { exec } = require("child_process");
const fs = require("fs");

// Set your static IP address and port here
const ip = process.argv[2] || "0.0.0.0";
const port = process.argv[3] || "3000";        

console.log(`Starting React app on http://${ip}:${port}`);

// Determine project type by checking for specific files
const isVite = fs.existsSync("vite.config.js") || fs.existsSync("vite.config.ts") || fs.existsSync("vite.config.mjs");
const isCRA = fs.existsSync("node_modules/react-scripts");
const isNext = fs.existsSync("next.config.js");
const isCustomWebpack = fs.existsSync("webpack.config.js");

// Command to start the app based on the project type
let command;

if (isVite) {
    console.log("Detected Vite project.");
    command = `cross-env VITE_HOST=${ip} VITE_PORT=${port} vite --host ${ip} --port ${port}`;
} else if (isCRA) {
    console.log("Detected Create React App project.");
    command = `cross-env HOST=${ip} PORT=${port} react-scripts start`;
} else if (isNext) {
    console.log("Detected Next.js project.");
    command = `cross-env HOST=${ip} PORT=${port} next dev -H ${ip} -p ${port}`;
} else if (isCustomWebpack) {
    console.log("Detected custom Webpack project.");
    command = `cross-env HOST=${ip} PORT=${port} webpack serve --host ${ip} --port ${port}`;
} else {
    console.log("Unsupported project type. Please ensure you're in a supported React project.");
    // Fallback command: Replace 'npm start' with your project's start script if different
    command = `cross-env HOST=${ip} PORT=${port} npm start`;
}

// Execute the command
const appStart = exec(command);

// Output the logs from the start process
appStart.stdout.on("data", (data) => {
    console.log(data);
});

appStart.stderr.on("data", (data) => {
    console.error(data);
});
