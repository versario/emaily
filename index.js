const express = require('express');
const app = express();

//Route handler
app.get('/', (req, res) => {
  res.send({ bye: 'actualization lles' });
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);
