# `react-host-runner`

`react-host-runner` is a command-line tool that allows you to run React applications on a specified IP address and port. This package simplifies the process of making your React app accessible over a network by dynamically setting the `HOST` and `PORT` environment variables.

## Features

- Easily start a React app on a specified IP address and port.
- Makes your development server accessible on the local network.
- Simple to integrate into existing React projects.

## Installation

```bash
npm install react-host-runner
```

## Usage

You can use react-host-runner to start your React app on a specific IP address and port.
### Run with Custom IP and Port

```bash
react-host-runner 192.168.1.100 3000
```
This command will start your React app on http://192.168.1.100:3000, making it accessible from other devices on the same network.

### Run with Default IP and Port
```bash
react-host-runner 
```
If you run the command without any arguments, react-host-runner will start your React app on the default IP address (http://10.254.254.254:3000). This setup can be connected and run using the React Lab app, enabling quick and easy access.

### Example Output
```bash
Starting React app on http://192.168.1.100:3000
```

Or, using the default:

```bash
Starting React app on http://10.254.254.254:3000
```

### Additional Information

- Ensure your React app is set up with react-scripts or a similar tool that supports the HOST and PORT environment variables.
- Make sure the specified IP address is available and correctly configured on your local network.


## License

This project is licensed under the MIT License.

## Keywords

React, Host, IP address, Network, Development, Cross-platform, Localhost, Port configuration, React.js, Web development, Frontend development



