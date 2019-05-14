import React from 'react';
import WebcamCapture from './webcamCapture';
import Navbar from './navbar';
/** Main Component **/
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgData: '',
      webcamEnabled: false,
      userName: 'test'
    }
  }

  handleWebcam = (img) => {
    this.setState({ 
      webcamEnabled: !this.state.webcamEnabled,
      imgData: img
    })
  }

  controlWebcam = () => {
    this.setState({ webcamEnabled: !this.state.webcamEnabled })
  }

  render(){
    const { webcamEnabled, userName, imgData } = this.state;
    let cam = webcamEnabled && !imgData ? (
      <WebcamCapture handler={this.handleWebcam} />
    ) : imgData && !webcamEnabled ? 
      (
        <React.Fragment>
          <h3>Things</h3>
        </React.Fragment>
      )
    : (
        <React.Fragment>
          <h2> Hi {userName}! Ready for your fortune?</h2>
          <button onClick={this.controlWebcam}>Click Me</button>
        </React.Fragment>
    )
    return (
      <React.Fragment>
        <main>
          {cam}
        </main>
      </React.Fragment>
    )
  }
}

/** App Component **/
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;