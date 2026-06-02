from fastapi import UploadFile

async def storage(file: UploadFile): #make file uploaded file

    pdf_bytes = await file.read() # read bytes from uploaded file
    
    filename = file.filename #filename
    
    saved_path = "uploads/" + filename #avoids hardcoded - any filename in folder

    with open(saved_path, "wb") as saved_file: #python build-in methods. wb = write bytes.
        saved_file.write(pdf_bytes)


    return saved_path





    

