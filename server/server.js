const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync('/Users/eunseo/helloWorld/server' + '/key.pem', 'utf-8'),
      cert: fs.readFileSync('/Users/eunseo/helloWorld/server' + '/cert.pem', 'utf-8'),
    },
    app.use('/', (req, res) => {
      res.send('Congrats! You made https server now :)');
    })
  )
  .listen(3001);
  //ngrok.io 사용할수도있다