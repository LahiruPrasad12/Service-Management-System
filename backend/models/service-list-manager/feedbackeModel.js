const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    mail : { type: String, required : true },
    message : { type: String, required : true },
   
});

const Feedback = mongoose.model("Feedback",feedbackSchema);

module.exports = Feedback;