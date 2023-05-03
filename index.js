const express = require('express')
const app = express();
// const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
  res.send('Server Exquisite Cuisine is running');
})



app.listen(port, () => {
  console.log(`Exquisite Cuisine server listening on port ${port}`)
})
