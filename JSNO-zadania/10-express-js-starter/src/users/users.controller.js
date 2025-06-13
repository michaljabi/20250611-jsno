import { Router } from 'express'

export const userController = new Router();


userController.get('', (req, res) => {

    res.send([])
})