const express = require('express')
const next = require('next')

const routes = require('../functions/app/routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })

app.prepare()
  .then(() => {
    const server = express()

    routes(app, server);
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
