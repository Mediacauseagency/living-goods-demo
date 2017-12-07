const Chart = require('chart.js')

// elm should be a canvas element
// inView should be a boolean
// i should be the index of the chart on the page
const toggleChart = (elm, inView, i) => {
  let ctx
  let chart
  const colors = ['#44ade2', '#0281a4', '#014f84', '#f47a44']

  const chartKey = `_chart_${i}`

  // these will be extrated from data attributes from the elem
  const labels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]

  // these will be extrated from data attributes from the elem
  const datasets = [
    {
      label: 'Data A',
      data: [5234, 6234, 8234, 10123, 13234, 14644, 16445, 20034]
    },
    {
      label: 'Data B',
      data: [5234, 8234, 10234, 14123, 17234, 20644, 22445, 24034],
    }
  ]

  const dataset = ({label, data, clear, i}) => ({
      label,
      data: clear ? data.map(() => 0) : data,
      backgroundColor: 'rgba(0,0,0,0.02)',
      borderColor: colors[i % colors.length]
  })

  if (!window[chartKey] && !window[chartKey + '_update']) {
    ctx = elm.getContext('2d')
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: datasets.map(({label, data}, i) =>
          dataset({label, data, clear: true, i})
        )
      },
      options: {
        scaleBeginAtZero: true,
        animation: { duration: 3000 }
      }
    })
    window[chartKey] = chart
  }

  if (!inView && window[chartKey + '_populated']) {
    update({datasets, chartKey, clear: true})
  }
  if (inView && !window[chartKey + '_populated']) {
    update({datasets, chartKey, clear: false})
  }
}

const update = ({datasets, clear, chartKey}) => {
  const savedChart = window[chartKey]
  datasets.map(({data}, i) => {
    savedChart.data.datasets[i].data = clear ? data.map(x => 0) : data
  })
  savedChart.update()
  window[chartKey + '_populated'] = !clear
}

module.exports = toggleChart
