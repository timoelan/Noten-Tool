// const express = require("express");
// const cors = require("cors");
// const mysql = require('mysql2');

import { serverStartup } from './serverStartup/serverStartup.js'

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: "admin",
//     database: 'accounts'
// });

// const app = express();
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// // app.use(cors({
// //     origin: "http://localhost:3306"
// // }))
//     app.use(express.static('public'))

// app.get("/users", (req, res) => {
//     connection.query("SELECT id, name, email FROM accounts.users", (error, result) => {
//         if (error) {
//             res.send(error.message)
//         } else {
//             res.send(result)
//         }
//     })
// })

// app.post("/create-account", (req, res) => {
//     console.log('create-account', req.body, req.headers )
//     connection.query(
//         "INSERT INTO accounts.users(id, name, password, email) VALUES (?, ?, ?, ?)",
//         [req.body.id, req.body.name, req.body.password, req.body.email],
//         (error, result) => {
//             if (error) {
//                 res.send(error.message)
//             } else {
//                 res.sendStatus(200)
//             }
//         })
// })
// app.post("/delete-account", (req, res) => {
//     //console.log('delete-account', req.body, req.headers )
//     connection.query(
//         `DELETE FROM accounts.users WHERE id=${req.body.id}`,
//         [req.body.id],
//         (error, result) => {
//             if (error) {
//                 res.send(error.message)
//             } else {
//                 res.sendStatus(200)
//             }
//         })
// })

// app.post("/update-account", (req, res) => {
//     //console.log('delete-account', req.body, req.headers )
//     connection.query(
//         `UPDATE users SET name = ?, password = ?, email = ? WHERE id = ?`,
//         [ req.body.name, req.body.password, req.body.email, req.body.id],
//         (error, result) => {
//             if (error) {
//                 res.send(error.message)
//             } else {
//                 res.sendStatus(200)
//             }
//         })
// })

//     app.listen(3000)

console.log('start')
serverStartup()
