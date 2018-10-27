const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('This is Node Express Server Running on Port 8000!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});