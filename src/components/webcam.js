import React from 'react';
import superagent from 'superagent';
import WebcamCapture from './webcamcapture';

/** WebCam Component 
 * Get user's picture from user and set 'imgData' state for App
 * By calling webCamCapture Component
 * **/
class Webcam  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgData: '',
      webcamEnabled: false,
    }
  }

  handleImageRequest = async (obj) => {
    return await superagent.post(`${obj.url}/${obj.resource}`)
    .field('imageObj', obj.data.imgData)
    .field('image', 'user image');
  }

  handleWebcam = (img) => {
    this.setState({ 
      webcamEnabled: !this.state.webcamEnabled,
      imgData: img
    })
    // this.props.requestHandler();

    this.handleImageRequest({
        url:process.env.REACT_APP_API_URL,
        resource:'pic',
        data: {
          username: this.state.userName,
          imgData: img
        }
      })
    .then(result => this.props.setData(result.body))
  }

  controlWebcam = () => {
    this.setState({ webcamEnabled: !this.state.webcamEnabled });
  }

  render(){
    const { webcamEnabled, imgData } = this.state;

    let content = webcamEnabled && !imgData ? (
      <WebcamCapture handler={this.handleWebcam} setImgData={this.props.setImgData} setURL={this.props.setURL}/>

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
          {content}
      </React.Fragment>
    )
  }
}

export default Webcam;