const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors')
const multer = require('multer')
const port = process.env.PORT || 8080;

app.use(cors());
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads/'),
    filename: function (req, file, cb) {   
        // null as first argument means no error
        cb(null, Date.now() + '-' + file.originalname )  
    }
})

app.post('/imageupload', async (req, res) => {	
    try {
        

        let upload = multer({ storage: storage}).single('image');

        upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields

            if (!req.file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

           

        }); 

    }catch (err) {console.log(err)}
})

app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`));

