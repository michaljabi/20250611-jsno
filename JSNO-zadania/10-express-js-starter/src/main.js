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
    console.log(req.quer.status)
    res.json(inMemoryGuests)
    //res.send('<h1>Hello</h1>')
})

app.listen(env.PORT, () => {
    console.log(`App is listening on http://localhost:${env.PORT}`)
})