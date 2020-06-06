const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: [3, '"name" should at-least three characters'],
		maxlength: [256, '"name" cannot b more than 256 characters']
	},
	
	price: {
		type: Number,
		required: true,
		min: [1, 'Price cannot be 0']
	}
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Items', ItemSchema);