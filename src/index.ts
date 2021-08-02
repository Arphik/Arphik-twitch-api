import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import https from 'https';
import fs from 'fs';

// Start the server
// const port = Number(process.env.PORT || 443);
// app.listen(port, () => {
//     logger.info('Express server started on port: ' + port);
// });

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(process.env.PORT, function () {
  console.log(`Example app listening on port 443! Go to https://localhost:${process.env.PORT}/`);
});