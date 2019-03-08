import * as express from 'express'
import * as ProgramsController from './controllers/programs_controller'
import { MONGODB_URI } from './config'

const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello Bob'))
app.get('/programs', ProgramsController.list)
app.get('/programs/:name', ProgramsController.show)

app.listen(port, () => {
  console.log(`Listening localhost:${port}`)
})
