import React from 'react';
import superagent from 'superagent';
import WebcamCapture from './webcamCapture';

class Webcam  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgData: '',
      webcamEnabled: false,
    }
  }

  handleImageRequest = async (obj) => {
    return await superagent.post('http://localhost:3000/pic')
    .field('imageObj', obj.data.imgData)
    .field('image', 'user image');
  }

  handleWebcam = (img) => {
    this.setState({ 
      webcamEnabled: !this.state.webcamEnabled,
      imgData: img
    })

    this.handleImageRequest({
        url:'http://localhost:3000',
        resource:'pic',
        data: {
          username: this.state.userName,
          imgData: img
        }
      })
    .then(result => console.log(result))
  }

  controlWebcam = () => {
    this.setState({ webcamEnabled: !this.state.webcamEnabled })
  }

  render(){
    const { webcamEnabled, imgData } = this.state;
    let content = webcamEnabled && !imgData ? (
      <WebcamCapture handler={this.handleWebcam} setImgData={this.props.setImgData}/>
    ) : imgData && !webcamEnabled ? 
      (
        <React.Fragment>
          <h3>Things</h3>
        </React.Fragment>
      )
    : (
        <React.Fragment>
          <button onClick={this.controlWebcam}>Click Me</button>
        </React.Fragment>
    )
    return (
      <React.Fragment>
        <main>
          {content}
        </main>
      </React.Fragment>
    )
  }
}

export default Webcam;