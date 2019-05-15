import React from 'react';
import superagent from 'superagent';


class History extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fortunes: []
    }
  }

  componentDidMount() {
    if(location.id && appURL ) {
      
      .then(results => this.setState({ fortunes: results.body }))
    }
  }

  render(){
    return(
      <>
        <h2>History</h2>
      </>
    )
  }
}

export default History;