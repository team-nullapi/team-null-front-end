import React from 'react'
import NavBar from './navbar'
import UserInput from './userInput'


class StartPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userName : ''
    };
  }
  handleChange = (userName) => {
    this.setState({userName});
  }
  handleSubmit = e =>{
    e.preventDefault();
    this.props.setUserName(this.state.userName);
    this.props.setURL('homePage');
  }
  render(){
    return (
      <>
      <NavBar setUrl={this.props.setURL} getUrl={this.props.getUrl}/>
      <div
          style={{
              position: 'absolute', 
              left: '50%', 
              top: '40%',
              transform: 'translate(-50%, -50%)'
          }}>
      <UserInput setUserName={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div> 
      </>
    )
  }
}
export default StartPage;