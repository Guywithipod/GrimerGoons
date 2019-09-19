let tables = require("./GunkyTables.js");
let path = require("path");

module.exports = function (app, express) {
    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "GrimeyHub.html"));
    });

    app.get("/reservationform", function (req, res) {
        res.sendFile(path.join(__dirname, "GrimeyForm.html"));
    });

    app.get("/reservationview", function (req, res) {
        res.sendFile(path.join(__dirname, "GrimeyViews.html"));
    });

    app.get("/table", function (req, res) {
        return res.json(tables);
    });

    app.post("/table", function (req, res) {
        let data = req.body;
        if (tables.length >= 5) {
            return res.json({
                message: "All Booked Up"
            })
        }
        data.ID = tables.length + 1;
        tables.push(data);
        return res.json({
            message: "Booked"
        })
    });
}