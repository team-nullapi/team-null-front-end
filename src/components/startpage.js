import React from 'react'
import NavBar from './navbar'
import UserInput from './userInput'
import Results from './results'

/** StartPage Component 
 * Get user name from user and set 'userName' state for App
 * By calling User Input Component
 * **/

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
      <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user}/>
      <div
          style={{
              position: 'absolute', 
              left: '50%', 
              top: '40%',
              transform: 'translate(-50%, -50%)'
          }}>
      <UserInput 
        setUserName={this.handleChange} 
        handleSubmit={this.handleSubmit}/>
      </div> 
      <div
          style={{
              position: 'absolute', 
              left: '50%', 
              top: '60%',
              transform: 'translate(-50%, -50%)'
          }}>
{/* //               <Results />  Fourtune Component to use */}
      </div>   
  
      </>
    )
  }
}
export default StartPage;