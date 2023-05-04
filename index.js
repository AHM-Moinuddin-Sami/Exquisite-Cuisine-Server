const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require('./store/chefs.json');

app.get('/', (req, res) => {
  res.send('Server Exquisite Cuisine is running');
})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(chef => chef.id === id);
    res.send(selectedChef);
})

app.listen(port, () => {
  console.log(`Exquisite Cuisine server listening on port ${port}`)
})
