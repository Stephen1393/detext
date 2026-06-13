import express from 'express'
import multer from 'multer'
import { storage } from './storage.js'
import { extract_text } from './doc_process.js';
import { createDocument } from './database/documents.js';
import { getDocuments, getDocument, deleteDocument} from './database/documents.js'

const upload = multer({ dest: 'uploads/' });

export const app = express()

app.get('/', function(req, res) {
    
    res.send("a homepage") 

}) //end get


app.post("/documents", upload.single('document'), async function (req, res) {
    if (!req.file) {

        return res.status(400).send("no file uploaded")
    }

    const uploadFile = req.file //upload file (request)
    const fileName = req.file.originalname
    const savedPath = storage(uploadFile) //savedfilepath 
    const text = await extract_text(savedPath) //extracted text 

    const database = await createDocument(fileName,savedPath,text)
    
    res.status(200).send(database)

}) //end post

     
app.get("/documents", async function(req, res) {
    
    const result = await getDocuments()

    console.log("GET documents route hit")
    
    res.status(200).json({documents: result})

}) //end get

app.get("/document/:id", async function (req, res) {

    const id = Number(req.params.id) 

    if (Number.isNaN(id)) {

        return res.status(400).send("no id found")
    }

    const result = await getDocument(id)

    if (!result) {

        return res.status(400).send("no document found")
    }

    res.status(200).json({document: result})
}) //end get

app.delete('/document/:id', async function (req, res) {

    const id = Number(req.params.id)

    if (Number.isNaN(id)) {

         return res.status(400).send("no id found")
    }

    const result = await deleteDocument(id)

    if (result === 0) {
        return res.status(404).send('id doesnt exist. nothing deleted')
    }

    res.status(200).json({result})
})

