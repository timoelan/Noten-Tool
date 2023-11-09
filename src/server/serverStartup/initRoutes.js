import { addGradeToDb } from '../grades/addGradeToDb.js'
import { gradeListFromDb } from '../grades/gradeListFromDb.js'

export function initRoutes(app) {
    app.post('/add-grade', (req, res) => {
        const { body, headers } = req
        console.log('add-grade', { body, headers })

        addGradeToDb(body.date, body.subject, body.grade)
        res.sendStatus(204)
    })

    app.get('/list-grades', (req, res) => {
        const { body, headers } = req
        console.log('list-grades', { body, headers })

        gradeListFromDb(body.date, body.subject, body.grade).then(
            (list) => {
                console.log('list-grades resolved', list)
                res.send(list)
            },
            (error) => {
                console.error(error)
            }
        )
    })
}
