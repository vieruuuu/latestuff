import fastify from "fastify";
import fastifyCors from 'fastify-cors';
import Redis from "redis-fast-driver";

import api from "./lib/api";

const r = new Redis({
  // host: '/tmp/redis.sock', //unix domain
  host: "127.0.0.1", // can be IP or hostname
  port: 6379,
  // maxRetries: 10, //reconnect retries, default -1 (infinity)
  // auth: '123', //optional password, if needed
  // db: 5, //optional db selection
  autoConnect: true, // will connect after creation
  doNotSetClientName: false, // will set connection name (you can see connections by running CLIENT LIST on redis server)
  doNotRunQuitOnEnd: false // when you call `end()`, driver tries to send `QUIT` command to redis before actual end
});
const app = fastify();
const PORT = 3000;

app.register(fastifyCors, {
  origin: [
    /latestuff\.net:8080$/,
    /www\.latestuff\.net:8080$/
  ]
})

app.register(api)

async function main() {
  try {
    await app.listen(PORT);
    console.log(`server listening on ${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

r.on("ready", () => {
  console.log("redis ready");
  main();
});

r.on("connect", () => {
  console.log("redis connected");
});

r.on("disconnect", () => {
  console.log("redis disconnected");
});

r.on("reconnecting", num => {
  console.log("redis reconnecting with attempt #" + num);
});

r.on("error", e => {
  console.log("redis error", e);
});

r.on("end", () => {
  console.log("redis closed");
});
