import pymupdf



def extracted_text(saved_path):
    
    doc = pymupdf.open(saved_path)
    
    
    document_text = ""
        
    for page in doc: 
        page_text = page.get_text() #page_text gets reset for every page
        document_text += page_text #stores text of each page
                 
    return document_text


  

    

    