let books = [
  {
    id: 1,
    title: 'All my friends',
    author: 'Mister MadeUp'
  },
  {
    id: 2,
    title: 'dragon trainer',
    author: 'myself'
  }
];

let id = 3;

module.exports = {
  getSingle: (req, res) => {
    const singleBookId = books.findIndex(book => book.id === +req.params.id);
    res.status(200).send(books[singleBookId]);
  },
  create: (req, res) => {
    req.body.id = id;
    id++;
    books.push(req.body);
    res.status(201).send();
    console.log(books);
  },
  getAll: (request, response) => {
    response.send(books);
  },
  update: (req, res) => {
    const { id } = req.params;
    const { body } = (req.books = books.map(book => {
      if (book.id === +id) {
        book.author = body.author;
        book.title = body.title;
      }
      return book;
    }));
    res.status(200).send(books);
  },
  delete: (req, res) => {
    books = books.filter(book => {
      book.id !== +req.params.id;
    });
    res.status(200).send(books);
  }
};
