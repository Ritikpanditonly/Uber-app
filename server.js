const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

// Import initializeSocket function
const { initializeSocket } = require('./socket'); // Update the path to the correct file

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});