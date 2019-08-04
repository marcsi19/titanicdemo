import React, {Component} from 'react'
import axios from 'axios'
import ChartGen from './chartgen'
import ChartClass from './chartclass'
// import TableData from './table'
import ReactDataGrid from 'react-data-grid'

const columns = [
  // {key: 'id', name: 'Id'},
  {key: 'PassengerId', name: 'PId', editable: true},
  {key: 'Survived', name: 'Survived', editable: true},
  {key: 'Pclass', name: 'Class', editable: true},
  {key: 'Name', name: 'Name', editable: true},
  {key: 'Sex', name: 'Sex', editable: true},
  {key: 'Age', name: 'Age', editable: true},
  {key: 'SibSp', name: 'SibSp', editable: true},
  {key: 'Parch', name: 'Parch', editable: true},
  {key: 'Ticket', name: 'Ticket', editable: true},
  {key: 'Fare', name: 'Fare', editable: true},
  {key: 'Cabin', name: 'Cabin', editable: true},
  {key: 'Embarked', name: 'Embarked', editable: true}
]
export class Main extends Component {
  constructor() {
    super()
    this.state = {
      allData: [],
      gender: [],
      pclass: [],
      selectedData: [],
      columns: columns,
      rows: []
    }
    this.selectData = this.selectData.bind(this)
    this.resetData = this.resetData.bind(this)
    this.onGridRowsUpdated = this.onGridRowsUpdated.bind(this)
  }
  selectData(selection) {
    try {
      const filterDataArray = []
      const chartArrayGender = []
      const chartArrayClass = []
      this.state.allData.map(elem => {
        let id = elem.id
        if (selection.includes(id)) {
          filterDataArray.push(elem)
        }
      })
      this.state.pclass.map(elem => {
        let id = elem.id
        if (selection.includes(id)) {
          chartArrayClass.push(elem)
        }
      })
      this.state.gender.map(elem => {
        let id = elem.id
        if (selection.includes(id)) {
          chartArrayGender.push(elem)
        }
      })
      this.setState({
        selectedData: filterDataArray,
        rows: filterDataArray,
        gender: chartArrayGender,
        pclass: chartArrayClass
      })
    } catch (err) {
      console.log('There was a problem making contact!')
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/')
      const allData = res.data
      const resGender = await axios.get('/api/gender')
      const gender = resGender.data
      const resClass = await axios.get('/api/class')
      const pclass = resClass.data
      this.setState({
        allData: allData,
        gender: gender,
        pclass: pclass,
        selectedData: allData,
        rows: allData
      })
    } catch (err) {
      console.log('There was a problem loading the data!')
    }
  }

  async resetData() {
    try {
      const res = await axios.get('/api/')
      const allData = res.data
      const resGender = await axios.get('/api/gender')
      const gender = resGender.data
      const resClass = await axios.get('/api/class')
      const pclass = resClass.data
      this.setState({
        allData: allData,
        gender: gender,
        pclass: pclass,
        selectedData: allData,
        rows: allData
      })
    } catch (err) {
      console.log('There was a problem loading the data!')
    }
  }

  onGridRowsUpdated = async ({fromRow, toRow, updated}) => {
    try {
      let index
      await this.setState(state => {
        const rows = state.rows.slice()
        for (let i = fromRow; i <= toRow; i++) {
          rows[i] = {...rows[i], ...updated}
          index = i
        }
        return {rows}
      })

      const payload = this.state.rows[index]

      await axios.put(`/api/`, payload)
      const res = await axios.get('/api/')
      const allData = res.data
      const resGender = await axios.get('/api/gender')
      const gender = resGender.data
      const resClass = await axios.get('/api/class')
      const pclass = resClass.data
      this.setState({
        allData: allData,
        gender: gender,
        pclass: pclass,
        selectedData: allData,
        rows: allData
      })
    } catch (err) {
      console.log('update failed')
    }
  }

  render() {
    const {gender, pclass, allData, selectedData} = this.state
    const selectData = this.selectData
    const rowGetter = rowNumber => this.state.rows[rowNumber]
    return (
      <div>
        <h1>Titanic Statistics</h1>
        <div className="main">
          <ChartGen genders={gender} selectData={selectData} />
          <ChartClass pclass={pclass} selectData={selectData} />
        </div>
        <div className="button">
          <button type="reset" onClick={this.resetData}>
            {' '}
            Reset Charts
          </button>
        </div>
        <div className="table">
          <ReactDataGrid
            columns={this.state.columns}
            rowGetter={i => this.state.rows[i]}
            rowsCount={this.state.rows.length}
            minHeight={500}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
          />
        </div>
        {/* <TableData dataToDisplay={selectedData} /> */}
      </div>
    )
  }
}

export default Main
