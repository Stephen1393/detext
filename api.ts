import express from 'express'
import multer from 'multer'
import { storage } from './storage.js'
import { extract_text } from './doc_process.js';
import { insertDocument } from './database/documents.js';

const upload = multer({ dest: 'uploads/' });



const app = express()

app.listen(3000, function() {
    console.log("listening on port 3000...")
})

app.get('/', function(req, res) {
    
    res.send("a homepage") 
})

app.post("/documents", upload.single('document'), async function (req, res) {
    if (!req.file) {

        return res.status(400).send("no file uploaded")
    }

    const uploadFile = req.file //upload file (request)
    const fileName = req.file.originalname
    const savedPath = storage(uploadFile) //savedfilepath 
    const text = await extract_text(savedPath) //extracted text 

    const database = await insertDocument(fileName,savedPath,text)
    
    res.status(200).send(database)
     


})








//user uploads file, app receives it. passes it to strorage
//storage saves PDF to new location
//storage returns file path
//doc_process receives file path
//doc_process extracts text
//api.ts passes file path + extracted text to database
//database saves text and stores file

