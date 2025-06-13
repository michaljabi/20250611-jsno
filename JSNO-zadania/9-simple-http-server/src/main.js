import { env } from "node:process";
import { createServer } from "node:http";

import data from "../data.json" with { type: "json" };

console.log(data.shopName);
console.log(data.products.length);

const { PORT } = env;

const server = createServer((request, response) => {
  console.log("Method", request.method);
  console.log("URL", request.url);
  console.log("Headers:", request.headers);
  const { host } = request.headers;

  response.statusCode = 404;
  response.write(`Hello world? You are: ${host}`);
  response.end();
  // response.write(`dopisane....`);
});

server.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} running..`);
});

// console.log(process.env.PORT)
// console.log(process.env.EDGE_CASE)
