import React, {Component} from 'react'
// import PieChart from './piechart'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ChartGen = props => {
  const {genders, selectData} = props || []
  const females = genders.filter(female => {
    if (female.Sex === 'female') {
      return true
    }
  })
  const males = genders.filter(male => {
    if (male.Sex === 'male') {
      return true
    }
  })

  const classDatas = {
    female: females,
    male: males
  }
  const options = {
    chart: {
      type: 'pie',
      width: 450,
      height: 250
    },
    // xAxis: {
    categories: ['Male', 'Female'],
    // },
    title: {
      text: 'Passengers by Genders'
    },
    plotOptions: {
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: function() {
              const seriesName = this.name.toLowerCase()
              const idArray = []
              classDatas[seriesName].map(elem => {
                idArray.push(elem.id)
              })

              selectData(idArray)
            }
          }
        }
      }
    },
    series: [
      {
        name: 'Passengers',
        data: [
          {
            name: 'Female',
            color: '#F5C6C6',
            y: females.length
          },
          {
            name: 'Male',
            color: '#A9D9EB',
            y: males.length
          }
        ]
      }
    ]
  }

  return (
    <div>
      <div className="piec">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}

export default ChartGen
