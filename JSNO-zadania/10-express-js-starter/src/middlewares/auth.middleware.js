import { ServerError } from "../server-error.js"


export function authMiddleware(req, res, next) {
    if (req.headers['authorization'] !== 's3cr3t') {
        next(new ServerError('Not authorized', 401))
    }
    next()
}