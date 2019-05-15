import React from 'react';
import Doughnut from 'react-chartjs-2'

class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Sadness', 'Neutral', 'Disgust', 'Anger', 'Surprise', 'Fear','Happiness'],
        datasets:[
          {
            label: 'Statisfaction',
            data:[
              4,
              5,
              7,
              8,
              90,
              22,
              23
            ],
            backgroundColor:[
              'black',
              'lightgreen',
              'purple',
              'red',
              'orange',
              'pink',
              'blue',
              'brown'
            ],
          }
        ]
      }
    }
  }
  render(){
    return(
      <div className ='resultChart'>
        <Doughnut
          data={this.state.chartData}
          options={{
              title : {
                display: true,
                text: '  Emotions',
                fontColor: 'rgb(255,215,0)',
                fontSize: 20
              },
              legend:{
                display:true,
                position: 'bottom',
                labels: {
                  fontColor: 'rgb(255,215,0)',
                  fontSize: 16
                }
              },
              responsive: true,
              maintainAspectRatio: false
            }}
          />
      </div>
    )
  }
}


export default Chart;