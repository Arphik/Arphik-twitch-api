import express from 'express';
import https from 'https';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(443, () => {
    console.log('The application is listening on port 3000!');
})

https.createServer(app);