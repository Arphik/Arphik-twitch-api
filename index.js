const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Server works');
})

app.post('/subcallback', (req, res) => {
    console.log("response EventsSubCallback");
    res.send('Subcallback worked!');
    res.status(200).end();
});


https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(443, function () {
    console.log(`Example app listening on port 443! Go to https://localhost:443/`);
  });