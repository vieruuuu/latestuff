const path = require("path");
const FtpDeploy = require("ftp-deploy");
let ftpDeploy = new FtpDeploy();

const config = {
  user: "vieru@latestuff.net", // NOTE that this was username in 1.x
  password: "w6pj$%BC1uZc5j1", // optional, prompted if none given
  host: "ftp.latestuff.net",
  localRoot: path.join(__dirname, "./dist/spa"),
  remoteRoot: "/public_html",
  include: ["**/*", ".*"],
  exclude: ["**/*.map"], // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
  deleteRemote: true, // delete ALL existing files at destination before uploading, if true
  forcePasv: true // Passive mode is forced (EPSV command is not sent)
};

// use with promises
ftpDeploy
  .deploy(config)
  .then(res => console.log("finished:", res))
  .catch(err => console.log(err));
