import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import env from './connection/config.js'

import route from './routes/routes.js'

const app = express();

app.set('port', env.PORT)

app.use(express.json())
app.use(morgan('dev'))
app.use(cors());

app.use('/api', route);

app.use((req, res) => {
    res.status(404).json({
        error: 'Route Not Found'
    })
})

export default app;