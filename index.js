const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const io = require('socker.io');
const url = require('url');

// use the express-static middleware

let clientResponseRef;

app.get("/", (req, res) => {

    const pathname = url.parse(req.url).pathname;

    const obj = {
      pathname: pathname,
      method: 'get',
      params: req.query,
    }

    io.emit('page-request', obj);

    clientResponseRef = res;
})

app.post('/subcallback', (req, res) => {

    const pathname = url.parse(req.url).pathname;

    const obj = {
      pathname: pathname,
      method: 'post',
      params: req.query,
    }

    io.emit('page-request', obj);

    clientResponseRef = res;
});

io.on('connection', (socket) => {
  console.log('a node connected');
  socket.on('page-response', (response) => {
    clientResponseRef.send(response);
  })
})

const port = process.env.YOUR_PORT || process.env.PORT || 443;

https
// .createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
// }, app)
.listen(port, function () {
  console.log(`Example app listening on port ${port}! Go to https://localhost:${port}/`);
});

// app.listen(3000, () => {
//   console.log('Server is running!');
// });