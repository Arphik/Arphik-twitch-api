const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

// use the express-static middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server works");
})

app.post('/subcallback', (req, res) => {
    console.log("response EventsSubCallback");
    res.send('Subcallback worked!');
    res.status(200).end();
});

const port = 3000;

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function () {
  console.log(`Example app listening on port ${port}! Go to https://localhost:${port}/`);
});

// app.listen(3000, () => {
//   console.log('Server is running!');
// });