import { Router } from 'express'
import { guestsService } from './guests.service.js';

export const guestController = new Router();

guestController.get('', async (req, res) => {

    console.log('[REQ id]', req.id, 'zawiera:', req.query)
    console.log(req.query.status)

    const guests = await guestsService.getByStatus(req.query.status);
    res.send(guests)
})

guestController.post('', async (req, res) => {
    const { name } = req.body;
    const newId = guestsService.addNew(name);
    res.status(201).send({ newId })
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
    const guest = await guestsService.findById(Number(id));
    res.send(guest);
})