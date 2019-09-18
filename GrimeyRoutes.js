module.exports = function (app) {
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
        [].push(data);
        return res.JSON({message: "fuck ya it works!!"})
    });
}