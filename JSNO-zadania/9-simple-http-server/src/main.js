import { env } from 'node:process'
import { createServer } from 'node:http'

const { PORT } = env;

const server = createServer((request, response) => {

    console.log('URL', request.url)
    console.log('Headers:', request.headers)
    const { host } = request.headers;

    response.statusCode = 404
    response.write(`Hello world? You are: ${host}`);
    response.end();
})

server.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} running..`)
})

// console.log(process.env.PORT)
// console.log(process.env.EDGE_CASE) 