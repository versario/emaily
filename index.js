const express = require('express');
const app = express();

//Route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there 2v' });
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);
