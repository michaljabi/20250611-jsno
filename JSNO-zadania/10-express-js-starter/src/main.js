import { env } from 'node:process'
import express from 'express'

const inMemoryGuests = [
    { id: 1, name: "Michał", status: "confirmed" },
    { id: 2, name: "Kasia", status: "confirmed" },
    { id: 3, name: "Jacek", status: "unconfirmed" },
    { id: 4, name: "Zosia", status: "confirmed" },
]


const app = express();

app.get('/guests', (req, res) => {

    console.log(req.query)
    console.log(req.query.status)
    // res.json(inMemoryGuests)
    res.send(inMemoryGuests.filter(g => req.query.status ? g.status === req.query.status : true))
})

// Kolejność endpointów ma znaczenie !!!
app.get('/guests/22', (req, res) => {
    res.send({ id: 22, message: 'test' });
})

app.get('/guests/:id', (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    /// sprawdzamy czy jest i 404 jak nie ma
    const guest = inMemoryGuests.find(g => g.id === numId);
    if (guest) {
        res.send(guest);
    } else {
        res.status(404).send({ error: `Guest id: ${numId} not found!` })
    }
})



app.listen(env.PORT, () => {
    console.log(`App is listening on http://localhost:${env.PORT}`)
})