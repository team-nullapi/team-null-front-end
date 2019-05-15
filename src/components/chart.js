import React from 'react';
import Doughnut from 'react-chartjs-2'

class Chart extends React.Component{
  
  constructor(props){
    
    super(props);
    this.state = {
      stat: [],
    }
  }

  render(){
    const { stats } = this.props;
    let data = [];
    /*
    'Disgust', 'Anger', 'Surprise', 'Fear','Happiness'
    */
    data.push(stats.sadness);
    data.push(stats.neutral);
    data.push(stats.disgust);
    data.push(stats.anger);
    data.push(stats.surprise);
    data.push(stats.fear);
    data.push(stats.happiness);
    const chartData = {
      labels: ['Sadness', 'Neutral', 'Disgust', 'Anger', 'Surprise', 'Fear','Happiness'],
      datasets:[
        {
          label: 'Statisfaction',
          data:data,
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
    return(
      <div className ='resultChart'>
        <Doughnut
          data={chartData}
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