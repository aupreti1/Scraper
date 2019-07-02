var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Headline = mongoose.model("Headline", headlineSchema);

var headlineSchema = new Schema({
    headline: { 
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String, 
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    }
});

module.exports = Headline;
