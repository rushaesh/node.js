require("dotenv").config();
const connectDB = require("./db/connect");
const places = require("./models/places");
const PlacesJson = require("./places.json");
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        await places.create(PlacesJson);
        console.log("success");
        
    } catch (error){
        console.log(error);
        
    }
};

start();