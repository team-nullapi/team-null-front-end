import React from 'react';
import NavBar from './navbar'
import Chart from './chart'

class ResultPage extends React.Component{
  render(){
    return(
      <div className='resultPage'>
        <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user}/>
        <Chart />
      {/* //</Fortune /> */}
      </div>
    )
  }
}

export default ResultPage;