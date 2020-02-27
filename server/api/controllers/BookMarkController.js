const mongoose = require('../../app/node_modules/mongoose');
const BookMark = mongoose.model('BookMark');
exports.list_all_bookomarks = (req, res) => {
  BookMark.find({}, (err, bookmarks) => {
    if (err) res.send(err);
    res.json(bookmarks);
  });
};
exports.create_a_bookmark = (req, res) => {
  const newbookmark = new BookMark(req.body);
  newbookmark.save((err, bookmark) => {
    if (err) res.send(err);
    res.json(bookmark);
  });
};
exports.read_a_bookmark = (req, res) => {
  BookMark.findById(req.params.bookmarkId, (err, bookmark) => {
    if (err) res.send(err);
    res.json(bookmark);
  });
};
exports.update_a_bookmark = (req, res) => {
  BookMark.findOneAndUpdate(
    { _id: req.params.bookmarkId },
    req.body,
    { new: true },
    (err, bookmark) => {
      if (err) res.send(err);
      res.json(bookmark);
    }
  );
};
exports.delete_a_bookmark = (req, res) => {
  BookMark.deleteOne({ _id: req.params.bookmarkId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'bookmark successfully deleted',
     _id: req.params.bookmarkId
    });
  });
};