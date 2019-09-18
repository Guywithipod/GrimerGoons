const port = 3000;
const express = require("express");
const app = express();
const grimeyRoutes = require("./GrimeyRoutes.js")

<<<<<<< HEAD:GrimeyServer.js
grimeyRoutes(app, express)
=======

grimeyRoutes(app)
>>>>>>> 81678b0004c07436a03a95802f6acc64f9263e98:Server.js

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const grimeyTables = require("./GunkyTables.js")