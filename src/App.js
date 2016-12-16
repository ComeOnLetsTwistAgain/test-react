import React, {Component} from 'react';
import './App.css';
import Test from './components/Test';
import UserList from './components/UserList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: "toto"
        }, {
          name: "titi"
        }
      ]
    }

  }

  render() {
    return (
      <div>
        <Test label="test"/>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
