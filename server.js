const path = require('path');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, DIR)
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage: storage });
app.use(bodyParser.json());

app.post('/api', upload.single('coverPhoto'),
    function (req, res) {
        if (!req.file) {
            console.log('No file received');
            return res.send({ success: false });
        }
        else{
            console.log('File received');
            return res.send({imgUrl:req.file.filename})
        }
    }
)

app.use(express.static(DIR));
const PORT = 3500;
app.listen(PORT, () => console.log('Server started ' + PORT));
