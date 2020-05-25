const express = require('express');
const path = require('path');
// const cors = require('cors');

let server = express();
// server.use(cors());

server.use(express.static(path.join(__dirname, '/build')));

server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log(`...express running on port: ${PORT}`));

// Guide used https://www.robinwieruch.de/minimal-react-webpack-babel-setup/