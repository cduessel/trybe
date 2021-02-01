const express = require('express');
const multer = require('multer');
const app = express();

// app.use(express.static(__dirname + '/uploads'));

// const upload = multer({ dest: 'uploads' });

const storage = multer.diskStorage({
  destination: './uploads',
  // (req, file, callback) => {
  //   callback(null, 'uploads');
  // },
  filename: (req, file, callback) => {
    callback(null, `${Date()}-${file.originalname}`);
    // callback(null, file.originalname)
  }
});

const upload = multer({ storage });

app.get('/ping', (req, res) => res.send('pong!'));

app.post('/files/upload', upload.single('file'), (req, res) => res.status(200).json(req.file));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

module.exports = app;
