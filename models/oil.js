const mongoose = require("mongoose")
const oilSchema = mongoose.Schema({

Oil_Name: {type: String,required: [true, 'Name of the oil cannot be empty']},

Oil_Company: {type: String,required: [true, 'Company of the oil cannot be empty']}, 

Oil_cost: {type: Number,required: [true, 'Cost of the oil cannot be empty']},

Oil_Rating: {type: Number,required: [true, 'Rating of the oil cannot be empty']}

})

module.exports = mongoose.model("oil",oilSchema)
