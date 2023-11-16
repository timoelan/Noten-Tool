// export
function filterGradeListForSubject(gradeList, subject) {
    const grades = []

    for (const grade of gradeList) {
        if (grade.subject === subject) {
            grades.push(grade)
        }
    }

    return grades
}