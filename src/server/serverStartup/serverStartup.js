import { initDatabase } from './initDatabase.js'
import { initRoutes } from './initRoutes.js'
import express from 'express'

export function serverStartup() {
    initDatabase()

    const app = express()
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    initRoutes(app)
    app.use(express.static('public'))

    console.log('lising on port 3000')
    app.listen(3000)
}
