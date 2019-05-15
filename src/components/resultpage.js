import React from 'react';
import NavBar from './navbar'
import Chart from './chart'
import Fortune from './results'

class ResultPage extends React.Component{
  render(){
    return(
      <div className='resultPage'>
        <NavBar />
      <div
          style={{
              position: 'absolute', 
              left: '20%', 
              top: '60%',
              transform: 'translate(-50%, -50%)'
          }}>
          <Chart />
        </div>
        <div
          style={{
              position: 'absolute', 
              left: '70%', 
              top: '60%',
              transform: 'translate(-50%, -50%)'
          }}>
          <Fortune />
      </div> 
       
      </div>
    )
  }
}

export default ResultPage;