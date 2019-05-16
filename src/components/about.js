import React from 'react';
import NavBar from './navbar'

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render(){
    return(
      <>
        <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user} />
        <h2>About us</h2>
      </>
    )
  }
}

export default About;