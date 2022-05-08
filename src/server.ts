import express from 'express'
import { routes } from './routes'

const app = express()

import cors from 'cors'

app.use(cors())

app.use(express.json())
app.use(routes)


app.listen(process.env.PORT || 3000, ()=> console.log('HTTP server is running'))
