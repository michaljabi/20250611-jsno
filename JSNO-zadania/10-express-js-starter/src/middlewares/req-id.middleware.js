

// export const reqIdMiddleware = (req, res, next) => {
//     req.id = id++;
//     console.log('REQ id nadane', req.id)
//     next()
// }
let id = 1;

export function reqIdMiddleware(req, res, next) {
    req.id = id++;
    console.log('REQ id nadane', req.id)
    next()
}