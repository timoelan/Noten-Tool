function addSubject(semesterName) {
    const semester = document.querySelector('#semester2')
    const table = semester.querySelector('table')
    const newRow = document.createElement('tr')
    console.log('addsubject')
    newRow.innerHTML = `
        <td><input type="text" placeholder="Fachname"></td>
        <td><input type="text" placeholder="Note"></td>
    `

    table.appendChild(newRow)
}
