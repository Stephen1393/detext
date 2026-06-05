import * as fs from "node:fs"
import * as mupdf from "mupdf"

export function extract_text (fileUpload: string) {

let document = mupdf.PDFDocument.openDocument(fs.readFileSync(fileUpload))

let text = ""

let i = 0
while (i < document.countPages()) {
    const page = document.loadPage(i)
    const json = page.toStructuredText("preserve-whitespace").asText()

    text += json
    i++
}

return text


}



    