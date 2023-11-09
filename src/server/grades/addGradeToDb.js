import { connection } from '../serverStartup/initDatabase.js'

export function addGradeToDb(date, subject, grade) {
    console.log('addGradeToDb', { grade, date, subject })
    connection().query(
        'INSERT INTO grades(grade, date, subject) VALUES(?, ?, ?)',
        [grade, new Date(date), subject],
        (error, result) => {
            if (error) {
                throw new Error(error)
            } else {
                console.log('addGradeToDb', result)
                return result
            }
        }
    )
}
