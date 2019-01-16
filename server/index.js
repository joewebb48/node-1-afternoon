const express = require('express');
const bodyParser = require('body-parser');
const cc = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.get('/api/book', cc.getAll);

app.get('/api/book/:id', cc.getSingle);

app.post('/api/book', cc.create);

app.delete('/api/book/:id', cc.delete);

app.put('/api/book/:id', cc.update);

app.listen(8080, () => {
  console.log(`8080 is working.`);
});
// console.log(books);
