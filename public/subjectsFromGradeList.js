// export
function subjectsFromGradeList(gradeList) {
    const subjects = []

    for (const grade of gradeList) {
        const { subject } = grade
        if (!subjects.includes(subject)) {
            subjects.push(subject)
        }
    }

    return subjects
}
