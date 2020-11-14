(function() {
  const express = require('express')
  const app = express()
  const port = 3000
  const path = require('path');

  app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/src/index.html'), function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent: index.html')
      }
    })
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})();