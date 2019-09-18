module.exports = function (app, express) {
    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "FLOOPIN.html"));
    });

    app.get("/reservationform", function (req, res) {
        res.sendFile(path.join(__dirname, "FLOOPIN.html"));
    });

    app.get("/reservationsview", function (req, res) {
        res.sendFile(path.join(__dirname, "FLOOPIN.html"));
    });

    app.get("/table", function (req, res) {
        return res.json(JSON.stringify([]))
    });

    app.post("/table", function (req, res) {
        let data = req.body;
        console.log(req.body);
        [].push(data);
        return res.json({
            message: "fuck ya it works!!"
        })
    });
}