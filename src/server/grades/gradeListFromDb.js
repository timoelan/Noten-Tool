import { connection } from '../serverStartup/initDatabase.js'

export function gradeListFromDb() {
    console.log('gradeListFromDb')

    return new Promise((resolve, reject) => {
        connection().query(
            'SELECT *  FROM accounts.grades',
            (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    console.log('listGradesFromDb', result)
                    resolve(result)
                }
            }
        )
    })
}
