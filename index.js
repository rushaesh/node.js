require("dotenv").config();

const express = require("express");

const app = express();
const connectdb = require("./db/connect");

const PORT = process.env.PORT || 5000;

const places_routes = require("./routers/places");

app.get("/", (req, res) => {
    res.send("Hello, your URL is working fine");
});

app.use("/api/places",places_routes);

const start = async () => {
    try {
        await connectdb();
        app.listen(PORT, () => {
            console.log(`${PORT} - Yes, I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
