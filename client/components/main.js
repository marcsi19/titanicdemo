import React, {Component} from 'react'
import axios from 'axios'
import ChartGen from './chartgen'
import ChartClass from './chartclass'
import TableData from './table'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      allData: [],
      gender: [],
      pclass: [],
      selectedData: []
    }
    this.selectData = this.selectData.bind(this)
    this.resetData = this.resetData.bind(this)
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
        selectedData: allData
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
        selectedData: allData
      })
    } catch (err) {
      console.log('There was a problem loading the data!')
    }
  }
  render() {
    const {gender, pclass, allData, selectedData} = this.state
    const selectData = this.selectData

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
        <TableData dataToDisplay={selectData} />
      </div>
    )
  }
}

export default Main
