import express from 'express'
//import multer from 'multer'
import { extract_text } from './doc_process.js';

//const upload = multer({ dest: 'uploads/' });



const app = express()

app.listen(3000, function() {
    console.log("listening on port 3000...")
})

app.get('/', function(req, res) {
    
    res.send("a homepage") 
})

app.post("/documents", function(req, res) {
    const text = extract_text('test_files/fake_PDF.pdf')
    res.send(text)
})








//user uploads file, app receives it. passes it to strorage
//storage saves PDF to new location
//storage returns file path
//doc_process receives file path
//doc_process extracts text
//api.ts passes file path + extracted text to database
//database saves text and stores file

