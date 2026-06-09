import { client, clientConnect } from "./connection"

async function createTable() {

    await clientConnect()
    
    await client.query(`
        CREATE TABLE IF NOT EXISTS documents (
        id SERIAL PRIMARY KEY,
        filename TEXT NOT NULL,
        filepath TEXT NOT NULL,
        text TEXT NOT NULL
        );
    `)

}

createTable()