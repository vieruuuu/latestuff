console.log("started");
const Redis = require("redis-fast-driver");

const r = new Redis({
  host: "127.0.0.1", // can be IP or hostname
  port: 6379,
  autoConnect: true, // will connect after creation
  doNotSetClientName: false, // will set connection name (you can see connections by running CLIENT LIST on redis server)
  doNotRunQuitOnEnd: false // when you call `end()`, driver tries to send `QUIT` command to redis before actual end
});

async function main() {
  const resp = await r.rawCallAsync(["ping"]);
  console.log(resp);
}

main();
