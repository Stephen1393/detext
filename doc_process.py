import pymupdf

doc = pymupdf.open("test_files/fake_PDF.pdf")

def extracted_text(doc):
    
    
    document_text = ""
        
    for page in doc: 
        page_text = page.get_text() #page_text gets reset for every page
        document_text += page_text #stores text of each page
                 
    return document_text
  

    

    