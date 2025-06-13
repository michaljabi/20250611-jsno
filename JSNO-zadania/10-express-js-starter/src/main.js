import { env } from 'node:process'
import express from 'express'
import { ServerError } from './server-error.js';
import { guestController } from './guests/guests.controller.js';

// TODO: 
// 1 - jak obsłuże getAll() poprawnie ?
// 2 - jak przerobić błąd złapany przez express na JSON ?

const app = express();

// Make id to request middleware:

let id = 1;
app.use((req, res, next) => {
    req.id = id++;
    console.log('REQ id nadane', req.id)
    next()
})

//  Make auth middleware:
app.use((req, res, next) => {
    if (req.headers['authorization'] !== 's3cr3t') {
        // next(new ServerError('Not authorized', 401))
    }
    next()
})

app.use('/guests', guestController)

app.use((err, req, res, next) => {
    console.error(err.stack)
    if (err instanceof ServerError) {
        res.status(err.status).send({ error: err.message })
    } else {
        res.status(500).send({ error: err.message })
    }
})

app.listen(env.PORT, () => {
    console.log(`App is listening on http://localhost:${env.PORT}`)
})