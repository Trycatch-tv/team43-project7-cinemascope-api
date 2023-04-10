import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import route from './routes/routes.js'
import { Movie } from './models/movies.js'

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
}));
app.use(bodyParser.json({ limit: "50mb" }));

app.use('/api', route);

export default app;