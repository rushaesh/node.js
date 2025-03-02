const mongoose = require("mongoose");

const placesschema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: [true,"price muast be provied"],
    },
    featured:{
        type: Boolean,
        required: false,
    },
    Rating:{
        type: Number,
        default: 4.9,
    },
    crateAt:{
        type: Date,
        default: Date.now(),
    },
    crateAt:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum:{
            values: ["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`,

        },
    },
    
});

module.exports = mongoose.model("places",placesschema);