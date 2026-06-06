import * as fs from "node:fs"
import * as path from "node:path"

export function storage(uploadFile: { path:string; originalname: string }) {

    if (!fs.existsSync("uploads")) {
        fs.mkdirSync('uploads')
    }

    let source = uploadFile.path //test_files/fake_PDF.pdf
    let filename = uploadFile.originalname //fake_PDF.pdf

    let destination = path.join("uploads", filename) //joins uploads/fake_PDF.pdf
    fs.renameSync(source, destination) 


    return destination

}

        
        

    

