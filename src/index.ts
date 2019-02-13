import * as express from 'express'

const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello Bob'))

app.listen(port, () => {
  console.log(`Listening localhost:${port}`)
})
