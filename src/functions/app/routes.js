module.exports = (app, server) => {
  const handle = app.getRequestHandler()

  server.get('/product/:id', (req, res) => {
    const actualPage = '/product'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

};
