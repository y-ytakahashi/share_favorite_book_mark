const bookMarkBuilder = require('../controllers/BookMarkController');
module.exports = app => {
	// BookMarkの一覧を取得
	app
    .route('/bookmarks')
    .get(bookMarkBuilder.list_all_bookomarks)
    .post(bookMarkBuilder.create_a_bookmark);
  app
    .route('/bookmarks/:bookmarkId')
    .get(bookMarkBuilder.read_a_bookmark)
    .put(bookMarkBuilder.update_a_bookmark)
    .delete(bookMarkBuilder.delete_a_bookmark);
};