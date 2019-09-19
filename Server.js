const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const grimeyRoutes = require("./GrimeyRoutes.js")


grimeyRoutes(app, express);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const grimeyTables = require("./GunkyTables.js")