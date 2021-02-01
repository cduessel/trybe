const app = require('./app');
const multer = require('multer');

const PORT = 3000;
app.listen(PORT, () => console.log(`Running at port: ${PORT}`));
