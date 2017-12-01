var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var captionSchema = new Schema ({
	title: {
	    type: String,
	    required: true
},
    link: {
    	type: String,
    	required: true
    },
    summary: {
    type: String,
    required: true
  },

});

var caption = mongoose.model("caption", captionSchema);

// export model
module.exports = caption;