var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Note = mongoose.model("Note", noteSchema);

var noteSchema = new Schema({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: String,
    noteText: String
});

module.exports = Note;