import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(){
    this.state = {
      user: {},
      countyCouncil: {},
      congressReps: [],
      houseReps: []
    }
  }

  componentWillMount(){
    //Make the query to fill out state
  }
  

  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path="/" component={()=><Dashboard />} />
          <Route exact path="/" component={()=><Dashboard />} />
          <Route exact path="/" component={()=><Dashboard />} />
        </Switch >
      </div>
    );
  }
}

export default App;
