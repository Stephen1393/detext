from fastapi import FastAPI
from doc_process import extracted_text

app = FastAPI()

@app.get('/')
def home_page():
    return "detext is running"

@app.get('/upload')
def upload_doc():
    text = extracted_text()
    return text
    # receive uploaded PDF
    # storage.py saves original file
    # doc_process.py extracts text from saved file
    # database.py saves filename, path, extracted text
    # return success response