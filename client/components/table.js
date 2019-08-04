import React, {Component} from 'react'
import ReactDataGrid from 'react-data-grid'

const TableData = props => {
  const columns = [
    {key: 'id', name: 'ID'},
    {key: 'PassengerId', name: 'PassengerId'},
    {key: 'Survived', name: 'Survived'},
    {key: 'Pclass', name: 'Pclass'},
    {key: 'Name', name: 'Name'},
    {key: 'Sex', name: 'Sex'},
    {key: 'Age', name: 'Age'},
    {key: 'SibSp', name: 'SibSp'},
    {key: 'Parch', name: 'Parch'},
    {key: 'Ticket', name: 'Ticket'},
    {key: 'Fare', name: 'Fare'},
    {key: 'Cabin', name: 'Cabin'},
    {key: 'Embarked', name: 'Embarked'}
  ]
  const rows = props.dataToDisplay
  console.log('rowoing', rows)
  const rowGetter = rowNumber => rows[rowNumber]
  return (
    <div>
      <ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minHeight={500}
      />
    </div>
  )
}

// export class TableData extends Component {
//   render() {
//     return <div>Hello</div>
//   }
// }

export default TableData
