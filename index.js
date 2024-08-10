#!/usr/bin/env node

const { exec } = require("child_process");
const fs = require("fs");

// Set your static IP address and port here
const ip = process.argv[2] || "10.254.254.254";
const port = process.argv[3] || "3000";        

console.log(`Starting React app on http://${ip}:${port}`);

// Determine project type by checking for specific files
const isVite = fs.existsSync("vite.config.js") || fs.existsSync("vite.config.ts");
const isCRA = fs.existsSync("node_modules/react-scripts");
const isNext = fs.existsSync("next.config.js");
const isCustomWebpack = fs.existsSync("webpack.config.js");

// Command to start the app based on the project type
let command;

if (isVite) {
    console.log("Detected Vite project.");
    command = `cross-env VITE_HOST=${ip} VITE_PORT=${port} vite`;
} else if (isCRA) {
    console.log("Detected Create React App project.");
    command = `cross-env HOST=${ip} PORT=${port} react-scripts start`;
} else if (isNext) {
    console.log("Detected Next.js project.");
    command = `cross-env HOST=${ip} PORT=${port} next dev -H ${ip} -p ${port}`;
} else if (isCustomWebpack) {
    console.log("Detected custom Webpack project.");
    command = `cross-env HOST=${ip} PORT=${port} webpack serve`;
} else {
    console.error("Unsupported project type or missing dependencies. Please ensure you're in a supported React project.");
    process.exit(1);
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
