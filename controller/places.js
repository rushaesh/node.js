const  Places = require("../models/places");

const getallplaces = async (req,res) => {
    const mydata = await Places.find({});
    res.status(200).json({Places:mydata});
};

const getallplacesTesting = async (req,res) => {
    res.status(200).json({msg:"I am getallplaces"});
};

module.exports= {getallplaces,getallplacesTesting};