import { expect, describe, it } from 'vitest'
import { subjectsFromGradeList } from './subjectsFromGradeList'

describe('subjectsFromGradeList', () => {
    it('returns the subjects', () => {
        const subjects = subjectsFromGradeList(gradeList())

        expect(subjects).toEqual(['Mathi', 'Abu', 'Sport', '319'])
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
