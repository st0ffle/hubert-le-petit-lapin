import express from 'express';
import * as middlewares from './app/middlewares.js';
import * as dotenv from 'dotenv'
import router from './app/router.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'))
// app.use('/:location', middlewares.userTracker)
app.use(router)
app.use(middlewares.errorHandler)

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}/`);
});