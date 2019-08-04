import React, {Component} from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ChartClass = props => {
  const selectData = props.selectData

  const {pclass} = props || []
  const first = pclass.filter(elem => {
    if (elem.Pclass === 1) {
      return true
    }
  })
  const second = pclass.filter(elem => {
    if (elem.Pclass === 2) {
      return true
    }
  })
  const third = pclass.filter(elem => {
    if (elem.Pclass === 3) {
      return true
    }
  })

  const classData = {
    first: first,
    second: second,
    third: third
  }

  const options = {
    chart: {
      type: 'column',
      width: 450,
      height: 250
    },
    xAxis: {categories: ['Class']},
    yAxis: {categories: ['Passengers']},

    title: {
      text: 'Passengers by Classes'
    },
    plotOptions: {
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: function() {
              const seriesName = this.series.name
                .toLowerCase()
                .split(' ')[0]
                .toString()
              const idArray = []
              classData[seriesName].map(elem => {
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
        name: 'First Class',
        data: [first.length],
        color: '#CA2727'
      },
      {
        name: 'Second Class',
        data: [second.length],
        color: '#52B8A0'
      },
      {
        name: 'Third Class',
        data: [third.length],
        color: '#3B9668'
      }
    ]
  }

  return (
    <div>
      <div className="high">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}

export default ChartClass
