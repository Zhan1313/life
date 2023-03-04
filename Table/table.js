const elem = document.querySelector('.table')

const tableTemplate = '<table><tbody></tbody></table>';
elem.insertAdjacentHTML('afterbegin', tableTemplate);

const rowTemplate = '<tr></tr>';
const colTemplate = '<td></td>';

const createTable = (rows, columns) => {
    let tBody = document.querySelectorAll('tbody')
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            rowTemplate.insertAdjacentHTML('afterbegin', colTemplate);
        }
        tBody.insertAdjacentHTML('afterbegin', rowTemplate)
    }
}
createTable(3, 13)
