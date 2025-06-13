import { env } from 'node:process'
import express from 'express'
import { ServerError } from './server-error.js';

// TODO: 
// 1 - jak obsłuże getAll() poprawnie ?
// 2 - jak przerobić błąd złapany przez express na JSON ?

async function getAll() {
    return [
        { id: 1, name: "Michał", status: "confirmed" },
        { id: 2, name: "Kasia", status: "confirmed" },
        { id: 3, name: "Jacek", status: "unconfirmed" },
        { id: 4, name: "Zosia", status: "confirmed" },
    ]
}


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
        next(new ServerError('Not authorized', 401))
    }
    next()
})


app.get('/guests', async (req, res) => {

    console.log('[REQ id]', req.id, 'zawiera:', req.query)
    console.log(req.query.status)
    // res.json(inMemoryGuests)
    const inMemoryGuests = await getAll();
    res.send(inMemoryGuests.filter(g => req.query.status ? g.status === req.query.status : true))
    /*
    getAll().then(inMemoryGuests => {
        res.send(inMemoryGuests.filter(g => req.query.status ? g.status === req.query.status : true))
    })
    */


})

// Kolejność endpointów ma znaczenie !!!
app.get('/guests/22', (req, res, next) => {
    console.log('Specjalistyczny middleware dla 22')
    next()
}, (req, res) => {
    res.send({ id: 22, message: 'test' });
})

app.get('/guests/:id', async (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    /// sprawdzamy czy jest i 404 jak nie ma
    const inMemoryGuests = await getAll();
    const guest = inMemoryGuests.find(g => g.id === numId);
    // if (guest) {
    //     res.send(guest);
    // } else {
    //     res.status(404).send({ error: `Guest id: ${numId} not found!` })
    // }

    if (!guest) {
        throw new ServerError(`Guest id: ${numId} not found!`, 404);
    }
    res.send(guest);
})


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