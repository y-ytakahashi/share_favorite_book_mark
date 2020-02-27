const mongoose = require('../../app/node_modules/mongoose');
const { Schema } = mongoose;

// mongoDB のデータ構造を定義
const BookMarkSchema = new Schema(
  {
			category: String,
			title: String,
			comment: String,
			url: String,
			author: String,
			create_date:{ type: Date, default: (new Date()).getTime() }
	},
  { collection: 'bookmark' }
);
module.exports = mongoose.model('BookMark', BookMarkSchema);