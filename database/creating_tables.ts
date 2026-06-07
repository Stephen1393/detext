import { Client } from 'pg'
import { client } from "./connection.js"
import { clientConnect } from './connection.js'

await clientConnect()


await client.query(`
    CREATE TABLE IF NOT EXIST documents (
    id SERIAL PRIMARY KEY,
    filename TEXT NOT NULL,
    filepath TEXT NOT NULL,
    text TEXT NOT NULL
    );
    `)
