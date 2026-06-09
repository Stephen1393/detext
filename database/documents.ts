import { client, clientConnect } from "./connection";

async function insertDocument() {

    await clientConnect()

client.query(`
    INSERT INTO documents (
    filename,
    filepath,
    text
    
    )

Values(
    'fake_PDF.pdf',
    'uploads/fake_PDF.pdf',
    'this is extracted text'
    )
`)

await client.end()

}

insertDocument()