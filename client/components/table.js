// import React from 'react'
// import ReactDataGrid from 'react-data-grid'

// const TableData = props => {
//   const columns = [
//     // {key: 'id', name: 'Id'},
//     {key: 'PassengerId', name: 'PId', editable: true},
//     {key: 'Survived', name: 'Survived', editable: true},
//     {key: 'Pclass', name: 'Class', editable: true},
//     {key: 'Name', name: 'Name', editable: true},
//     {key: 'Sex', name: 'Sex', editable: true},
//     {key: 'Age', name: 'Age', editable: true},
//     {key: 'SibSp', name: 'SibSp', editable: true},
//     {key: 'Parch', name: 'Parch', editable: true},
//     {key: 'Ticket', name: 'Ticket', editable: true},
//     {key: 'Fare', name: 'Fare', editable: true},
//     {key: 'Cabin', name: 'Cabin', editable: true},
//     {key: 'Embarked', name: 'Embarked', editable: true}
//   ]
//   let rows = props.rows
//   let onGridRowsUpdated = props.onGridRowsUpdated
//   console.log('thseorwo', rows)
//   const rowGetter = rowNumber => rows[rowNumber]
//   return (
//     <div className="table">
//       <ReactDataGrid
//         columns={columns}
//         rowGetter={i => rows[i]}
//         rowsCount={rows.length}
//         minHeight={500}
//         onGridRowsUpdated={onGridRowsUpdated}
//         enableCellSelect={true}
//       />
//     </div>
//   )
// }

// export default TableData
