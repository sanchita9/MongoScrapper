var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({
	name: {
		type: String
	},
	body: {
		type: String,
		required: true
	}
});

var note = mongoose.model("note", noteSchema);

module.exports = note;