import React from 'react'
import NavBar from './navbar'
import UserInput from './userInput'


/** StartPage Component 
 * Get user name from user and set 'userName' state for App
 * By calling User Input Component
 * **/

class StartPage extends React.Component{
  handleSubmit = (userName) =>{
    this.props.setUserName(userName);
    this.props.setURL('homePage');
  }

  render(){
    return (
      <>
      <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user}/>
      <div
          style={{
              position: 'absolute', 
              left: '47%', 
              top: '40%',
              transform: 'translate(-50%, -50%)'
          }}>
        <img height="400" width="400" src={require('../images/titleart.gif')} alt="card"/>
      </div>
      <div
          style={{
              position: 'absolute', 
              left: '50%', 
              top: '75%',
              transform: 'translate(-50%, -50%)'
          }}>
        <UserInput 
        setUserName={this.handleChange} 
        handleSubmit={this.handleSubmit}/>
      </div>
      </>
    )
  }
}
export default StartPage;