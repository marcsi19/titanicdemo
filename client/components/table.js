// import React from 'react'
// import ReactDataGrid from 'react-data-grid'

// const TableData = props => {
//   const columns = [
//     {key: 'id', name: 'Id'},
//     // {key: 'PassengerId', name: 'PId'},
//     {key: 'Survived', name: 'Survived'},
//     {key: 'Pclass', name: 'Class'},
//     {key: 'Name', name: 'Name'},
//     {key: 'Sex', name: 'Sex'},
//     {key: 'Age', name: 'Age'},
//     {key: 'SibSp', name: 'SibSp'},
//     {key: 'Parch', name: 'Parch'},
//     {key: 'Ticket', name: 'Ticket'},
//     {key: 'Fare', name: 'Fare'},
//     {key: 'Cabin', name: 'Cabin'},
//     {key: 'Embarked', name: 'Embarked'}
//   ]
//   let rows = props.dataToDisplay
//   const rowGetter = rowNumber => rows[rowNumber]
//   return (
//     <div className="table">
//       <ReactDataGrid
//         columns={columns}
//         rowGetter={i => rows[i]}
//         rowsCount={rows.length}
//         minHeight={500}
//       />
//     </div>
//   )
// }

// export default TableData
