import { expect, describe, it } from 'vitest'
import { filterGradeListForSubject } from './filterGradeListForSubject'

describe('filterGradeListForSubject', () => {
    it('returns the subjects', () => {
        const grades = filterGradeListForSubject(gradeList(), 'Mathi')

        expect(grades).toEqual([
            { id: 1, subject: 'Mathi', date: '2023-10-24T22:00:00.000Z' },
            { id: 3, subject: 'Mathi', date: '2023-10-24T22:00:00.000Z' },
            { id: 54, subject: 'Mathi', date: '2023-10-24T22:00:00.000Z' },
        ])
    })

    it('returns the an empty list for an unkown subject', () => {
        const grades = filterGradeListForSubject(gradeList(), 'xyz')

        expect(grades).toEqual([])
    })
})

function gradeList() {
    return [
        { id: 1, subject: 'Mathi', date: '2023-10-24T22:00:00.000Z' },
        { id: 22, subject: 'Abu', date: '2023-10-24T22:00:00.000Z' },
        { id: 3, subject: 'Mathi', date: '2023-10-24T22:00:00.000Z' },
        { id: 45, subject: 'Sport', date: '2023-10-24T22:00:00.000Z' },
        { id: 54, subject: 'Mathi', date: '2023-10-24T22:00:00.000Z' },
        { id: 6, subject: 'Sport', date: '2023-10-24T22:00:00.000Z' },
        { id: 7, subject: '319', date: '2023-10-24T22:00:00.000Z' },
    ]
}
