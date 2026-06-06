import * as fs from "node:fs"
import * as path from "node:path"

export function storage(uploadFile: { path:string }) {

    if (!fs.existsSync("uploads")) {
        fs.mkdirSync('uploads')
    }

    let source = uploadFile.path //test_files/fake_PDF.pdf
    let filename = path.basename(source) //fake_PDF.pdf

    let destination = path.join("uploads", filename) //joins file path to folder

    fs.renameSync(source, destination) //moves to new location


    return destination

}

        
        

    

