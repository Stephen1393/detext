import { client, clientConnect } from "./connection.js";

export async function insertDocument(filename:string, filepath:string, extractedText:string) {

    await clientConnect()
    
    await client.query(`

        INSERT INTO documents (
        filename,
        filepath,
        text
        
        )
        
        Values ($1, $2, $3 )`,
        [filename, filepath,extractedText]
    )
    
    
    await client.end()
}