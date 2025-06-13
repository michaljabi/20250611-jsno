import { Router } from 'express'
import { ServerError } from '../server-error.js';

async function getAll() {
    return [
        { id: 1, name: "Michał", status: "confirmed" },
        { id: 2, name: "Kasia", status: "confirmed" },
        { id: 3, name: "Jacek", status: "unconfirmed" },
        { id: 4, name: "Zosia", status: "confirmed" },
    ]
}

export const guestController = new Router();


guestController.get('', async (req, res) => {

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
guestController.get('/22', (req, res, next) => {
    console.log('Specjalistyczny middleware dla 22')
    next()
}, (req, res) => {
    res.send({ id: 22, message: 'test' });
})

guestController.get('/:id', async (req, res) => {
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