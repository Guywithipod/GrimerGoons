const port = 3000;
const express = require("express");
const app = express();
const grimeyRoutes = require("./GrimeyRoutes.js")

grimeyRoutes(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
