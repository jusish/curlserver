const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully check in the uploads folder');
});

app.listen(port, "192.168.2.35" ,() => {
  console.log(`Server is running on port ${port}`);
});




//The curl command is curl -X POST -F "file=@/home/justin/Downloads/Photos/collage.jpg" http://localhost:3000/upload
//The curl for the other host connection command is curl -X POST -F "file=@/path/to/your/file.jpg" http://your.local.ip.address:3000/upload

