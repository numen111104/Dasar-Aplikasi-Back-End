const {addBookhandler,
  getAllBooksHandler,
  getDetailBookByIdHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler} = require('./handler.js');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookhandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
