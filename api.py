from fastapi import FastAPI, UploadFile
from doc_process import extracted_text
from storage import storage

app = FastAPI()

@app.get('/')
def home_page():
    return "detext is running"

@app.post('/upload')
async def upload_doc(file: UploadFile):#injects file into file object

    saved_path = await storage(file) # storage saves file into new location, returns that filepath
    text = extracted_text(saved_path) # extract text from PDF

    return text
