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
    

}


export async function getDocuments() {

    await clientConnect()

    const queryResult = client.query(`SELECT * FROM documents`)

    return (await queryResult).rows
}

export async function getDocument(id : number) {

    await clientConnect()

    const result = await client.query(`
        SELECT * FROM documents
        WHERE id = $1
    `, [id])
    
    
return result.rows

}