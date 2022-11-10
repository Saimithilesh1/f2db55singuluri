const mongoose = require("mongoose")
const oilSchema = mongoose.Schema({

Oil_Name: String,

Oil_Company: String,

Oil_cost: Number,

Oil_Rating: Number

})

module.exports = mongoose.model("oil",oilSchema)