const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
  console.log("received GET request...")
  res.json({message: 'Hello World!'}).status(200)
})

app.listen(port, () => {
  console.log(`Hello app listening on port ${port}`)
})