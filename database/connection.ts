import dotenv from 'dotenv'
import { Client } from 'pg'

dotenv.config()

const config = {
    host:process.env.POSTGRES_HOST,
    port:Number(process.env.POSTGRES_PORT),
    user:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DB
}

export const client = new Client(config)
export function clientConnect() {

    return client.connect() 
}

















//1. Start Docker container
//2. Find DB credentials
//3. Read credentials from .env
//4. Connect using pg Client
//5. Create documents table
//6. Insert document record
//7. Query record back