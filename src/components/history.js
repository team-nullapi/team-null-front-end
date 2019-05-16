import React from 'react';
import superagent from 'superagent';
import NavBar from './navbar'


class History extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fortunes: []
    }
  }

  componentDidMount() {
    if(this.props.getUrl === 'historyPage') {
      superagent.get(`${process.env.REACT_APP_API_URL}/fortunes`).query({data: { username: this.props.user}})
      .then(results => this.setState({ fortunes: results.body }))
      .catch(err => console.error(err));
    }
  }

  render(){
    const { fortunes } = this.state;
    const content = fortunes ? (
      fortunes.map((val, idx) => {
        let date = new Date(parseInt(val.created_on)).toDateString();
        return (
          <li key={idx}>
                  <p>{`Created on: ${date}`}</p>
                  <p>{val.fortune}</p>
          </li>
        );
      })
    ) : (
      <div>
        <p>No Fortunes to display</p>
      </div>
    )
    return(
      <>
        <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user}/>
        <h2>History</h2>
        <section id="history-container">
          <ul>
            {content}
          </ul>
        </section>
      </>
    )
  }
}

export default History;