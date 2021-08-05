import express from 'express';
import https from 'https';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => {
    res.send("Server is working!");
})
app.post('/subcallback', (req, res) => {
  res.send("Subcallback");
  res.status(200).end();
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(443, function () {
  console.log(`Example app listening on port 443! Go to https://localhost:443/`);
});