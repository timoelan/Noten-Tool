import { createConnection } from 'mysql2'

export function initDatabase() {
    internalConnection = createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'accounts',
    })
}

export function connection() {
    if (!internalConnection)
        throw new Error('connection not initalized. Call initDatabase first')
    return internalConnection
}

let internalConnection = undefined
