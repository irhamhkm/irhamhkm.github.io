const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '/index.html'), function (err) {
    if (err) {
      next(err);
    } else {
      console.log('index.html');
    }
  });
});

app.use(express.static(path.join(__dirname, '/public/')));

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
