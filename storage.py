from fastapi import UploadFile

def storage(file: UploadFile): #make file uploaded file

    pdf_bytes = file.read() # read bytes from uploaded file

    with open("uploads/fake_PDF.pdf", "wb") as saved_file: #python build-in methods. wb = write bytes.
        saved_file.write(pdf_bytes)

        saved_path = "uploads/fake_PDF.pdf"
        
        return saved_path





    

