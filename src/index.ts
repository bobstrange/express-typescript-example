import * as express from 'express'
import * as ProgramsController from './controllers/programs_controller'
import { MONGODB_URI } from './config'
import * as Mongoose from 'mongoose'

Mongoose.connect(MONGODB_URI).then().catch((error: any) => {
  console.log(`Mongodb connection error. ${error}`)
})

const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello Bob'))
app.get('/programs', ProgramsController.list)
app.get('/programs/:name', ProgramsController.show)

app.listen(port, () => {
  console.log(`Listening localhost:${port}`)
})
