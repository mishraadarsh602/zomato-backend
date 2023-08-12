const mongoose  = require("mongoose");

//create schema
const Schema  = new mongoose.Schema(
    {
      
      
        _id:{type:Number},
        name: {type:String},
        content: {type:String},
        image: {type:String},

  }
)

//create model
const MealTypeModel =  mongoose.model("mealtype",Schema,"mealtypes");  // name , schema , collection name
module.exports = MealTypeModel;