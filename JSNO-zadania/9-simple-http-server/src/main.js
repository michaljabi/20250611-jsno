import { env } from "node:process";
import { createServer } from "node:http";

import data from "../data.json" with { type: "json" };

console.log(data.shopName);
console.log(data.products.length);

const { PORT } = env;

const server = createServer((request, response) => {
    // console.log("Method", request.method);
    // console.log("URL", request.url);
    // console.log("Headers:", request.headers);
    // const { host } = request.headers;

    const { products, shopName } = data;
    const { method, url } = request;

    if (method === 'GET') {
        switch (url) {
            case "/products":
                response.setHeader('Content-Type', 'application/json')
                response.write(JSON.stringify(products));
                break;
            case "/shop-info":
                response.setHeader('Content-Type', 'application/json')
                response.write(JSON.stringify({ shopName }));
                break;
            default:
                // to też powinno być produkcyjnie jako `JSON` i zmienione na jakiś wysyłany obiekt...
                response.setHeader('Content-Type', 'text/plain')
                response.statusCode = 404;
                response.write(`404 - nie znam ścieżki ${url}`)
        }
    } else {
        response.setHeader('Content-Type', 'application/json')
        response.statusCode = 400;
        response.write(JSON.stringify({ error: `Method ${method} not supported...` }))
    }
    //response.statusCode = 404;
    //response.write(`Hello world? You are: ${host}`);
    response.end();
    // response.write(`dopisane....`);
});

server.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} running..`);
});

// console.log(process.env.PORT)
// console.log(process.env.EDGE_CASE)
