import * as express from 'express'
import * as ProgramsController from './controllers/programs_controller'
import { APP_PORT } from './config'

const app = express()
const port = APP_PORT

app.get('/', (req, res) => res.send('Hello Bob'))
app.get('/programs', ProgramsController.list)
app.get('/programs/:name', ProgramsController.show)

app.listen(port, () => {
  console.log(`Listening localhost:${port}`)
})
