const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world!')
})

//get
//'/user'
app.get('/user', (req, res) => {
  res.send('get user post')
});

//post
//'/user'
app.post('/user', (req, res) => {
  res.send('user\'s post');
});

app.listen(port, () => {
  console.log(`open server on http://localhost:${port}`);
})