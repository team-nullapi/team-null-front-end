import React from 'react';
import superagent from 'superagent';
import {Bar} from 'react-chartjs-2'
import NavBar from './navbar'


class History extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fortunes: []
    }
  }

  componentDidMount() {
    if(this.props.getUrl === 'historyPage') {
      superagent.get(`${process.env.REACT_APP_API_URL}/fortunes`).query({data: { username: this.props.user}})
      .then(results => this.setState({ fortunes: results.body }))
      .catch(err => console.error(err));
    }
  }

  reduceArr = (arr) => {
    return arr.reduce((acc, curr) => Math.round(parseInt(acc) + parseInt(curr)/arr.length));
  }
  calculateAvg(){
    const { fortunes } = this.state;
    let sad = [];
    let neutral = [];
    let disgust = [];
    let anger = [];
    let surprise = [];
    let fear = [];
    let happy = [];
    let dates = [];
    let data = [];
    if(fortunes) {
      for(var i = 0; i < fortunes.length; i++){
          data.push(fortunes[i].dominant_attribute)
          sad.push(fortunes[i].sadness);
          neutral.push(fortunes[i].neutral);
          disgust.push(fortunes[i].disgust);
          anger.push(fortunes[i].anger);
          surprise.push(fortunes[i].surprise);
          fear.push(fortunes[i].fear);
          happy.push(fortunes[i].happiness);
          dates.push(new Date(parseInt(fortunes[i].created_on)).toDateString())
      }
    }

    let newSad = sad.length ? this.reduceArr(sad) : [];
    let newNeutral = neutral.length ? this.reduceArr(neutral) : [];
    let newDisgust = disgust.length ? this.reduceArr(disgust) : [];
    let newAnger = anger.length ? this.reduceArr(anger) : [];
    let newSurprise = surprise.length ? this.reduceArr(surprise) : [];
    let newFear = fear.length ? this.reduceArr(fear) : [];
    let newHappy = anger.length ? this.reduceArr(happy) : [];

    return [newSad, newNeutral, newDisgust, newAnger, newSurprise, newFear, newHappy];

  }

  render(){
    const { fortunes } = this.state;
    const list = fortunes ? (
      fortunes.map((val, idx) => {
        let date = new Date(parseInt(val.created_on)).toDateString();
        return (
          <>
            <li key={idx}>
                    <p id="createdDate">{`Created on: ${date}`}</p>
                    <p id="historyFortune">{val.fortune}</p>
            </li>
            <br/> 
          </>
        );
      })
    ) : (
      <div>
        <p>No Fortunes to display</p>
      </div>
    );

    let data = this.calculateAvg();

    const chartData = {
      labels: ['Sadness', 'Neutral', 'Disgust', 'Anger', 'Surprise', 'Fear','Happiness'],
      datasets:[
        {
          label: 'Emotions',
          data:data,
          backgroundColor:[
            'lightblue',
            'grey',
            'orange',
            'red',
            'yellow',
            'black',
            'blue',
            'brown'
          ],
        }
      ]
    }
    const chart = fortunes ? (
        <Bar
          data={chartData}
          width={980}
          height={500}
          options={{
            title : {
              display: true,
              text: 'Averages of past readings',
              fontColor: 'rgb(255,255,255)',
              fontSize: 24
            },
            legend:{
              display:true,
              position: 'bottom',
              labels: {
                fontColor: 'rgb(255,255,255)',
                fontSize: 24
              }
            },
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontColor: 'yellow-orange'
                  },
              }],
            xAxes: [{
                  ticks: {
                      fontColor: 'yellow-orange'
                  },
              }]
          },
            responsive: true,
            maintainAspectRatio: false
          }}
        />
    ) : '';
    return(
      <>
        <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user}/>
        <section id="history-graph-container">
            <div
              style={{
                  position: 'absolute', 
                  left: '45%', 
                  top: '38%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff'
              }}>
                {chart}
              </div>
        </section>
        <section id="history-list-container">
          <h3>History of Fortunes</h3>
          <ul id="list">
            {list}
          </ul>
        </section>

      </>
    )
  }
}

export default History;