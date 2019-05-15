import React from 'react';
import NavBar from './navbar'
import Chart from './chart'

class ResultPage extends React.Component{
  render(){
    return(
      <div className='resultPage'>
        <NavBar />
        <Chart />
      {/* //</Fortune /> */}
      </div>
    )
  }
}

export default ResultPage;