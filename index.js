const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.set('trust proxy', true)

app.all('*', (req, res) => {
  res.json({
    status: 'ok',
    data: {
      ip: req.ip,
      ips: req.ips,
      connectionRemoteAddress: req.connection.remoteAddress,
      socketRemoteAddress: req.socket.remoteAddress,
      headerFwd: req.header('x-forwarded-for'),
      hostname: req.hostname,
      headers: req.headers
    },
  })
})

app.listen(port, () => {
  console.log('App is running on port ' + port)
})
