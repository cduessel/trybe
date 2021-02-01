const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const books = require("./controllers/booksController");

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', books);

// app.get("/books", booksController.getAll);
// app.get("/book/:id", booksController.getById);
// app.post("/book", booksController.createNew);
// app.post("/book/:id", booksController.updateById);
// app.delete("/book/:id", booksController.deleteById());

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`O pai tá ON no projeto e na porta ${PORT}`);
});
