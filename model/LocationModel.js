const mongoose  = require("mongoose");

//create schema
const Schema  = new mongoose.Schema(
    {
      
        name: {type:String},
        city_id: {type:Number},
        location_id: {type:Number},
        city: {type:String},
        country_name: {type:String}
      

  }
)

//create model
const LocationModel =  mongoose.model("location",Schema,"locations");  // name , schema , collection name
module.exports = LocationModel;