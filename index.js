var express = require('express');
var cors = require('cors');
var multer = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()

// Initial setup
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// Home page endpoint
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// File analyse post endpoint
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  // req.file is the `avatar` file
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
  // req.body will hold the text fields, if there were any
})

// port listening
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
