const express = require('express')
const app = express()
const PORT = 4999;
const jsonParser = express.json({ strict: false });
const cors = require('cors');

//cors
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//port연결
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

app.post('/lower', jsonParser, (req, res) => {
  res.send(JSON.stringify(req.body.toLowerCase()))
})

app.post('/upper', jsonParser, (req, res) => {
  res.send(JSON.stringify(req.body.toUpperCase()))
})
