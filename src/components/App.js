import React from 'react';
import StartPage from './startpage';
import Homepage from './homepage';
import History from './history';
import About from './about';
// import {Router, Route} from 'react-router';


/** App Component **/
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      userName : ' ',
      imgData : '',
      url: 'startPage'
    };
  }
  
  setUserName = (userName) =>{
    this.setState({userName: userName});
  }
  setImgData = (imgData) =>{
    this.setState({imgData});
  }
  setURL = (url) => {
    this.setState({url})
  };


  render() {
    return (
      <React.Fragment>
        {
          (this.state.url === 'startPage') 
          ? <StartPage setUserName={this.setUserName} setURL={this.setURL} getUrl={this.state.url}
           /> 
          : (this.state.url === 'homePage')
          ? <Homepage setURL={this.setURL} userName={this.state.userName}setImgData={this.setImgData}/> 
          : (this.state.url === 'historyPage')
          ? <History />
          : <About />
        }
      </React.Fragment>
    );
  }
}

export default App;