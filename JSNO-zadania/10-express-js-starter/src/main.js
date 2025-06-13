import { env } from 'node:process'
import express from 'express'
import { ServerError } from './server-error.js';
import { guestController } from './guests/guests.controller.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { reqIdMiddleware } from './middlewares/req-id.middleware.js';
import { userController } from './users/users.controller.js';

// TODO: 
// 1 - jak obsłuże getAll() poprawnie ?
// 2 - jak przerobić błąd złapany przez express na JSON ?

const app = express();

// Make id to request middleware:
app.use(reqIdMiddleware)

app.use('/guests', guestController)

app.use('/users', authMiddleware, userController)

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