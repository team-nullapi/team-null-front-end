import React from 'react';
import NavBar from './navbar'
import Chart from './chart'
import Fortune from './results'

class ResultPage extends React.Component{
  render(){
    return(
      <div className='resultPage'>
        <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user}
        />
      <div
          style={{
              position: 'absolute', 
              left: '20%', 
              top: '50%',
              transform: 'translate(-50%, -50%)'
          }}>
          <Chart stats={this.props.stats}/>
        </div>
        <div
          style={{
              position: 'absolute', 
              left: '70%', 
              top: '60%',
              transform: 'translate(-50%, -50%)'
          }}>
          <Fortune stat={this.props.stats}/>
      </div> 
      </div>
    )
  }
}

export default ResultPage;