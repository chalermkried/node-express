const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    data: {
      ip: req.ip,
      ips: req.ips,
      connectionRemoteAddress: req.connection.remoteAddress
    }
  })
})

app.listen(port, () => {
  console.log('App is running on port ' + port)
})
