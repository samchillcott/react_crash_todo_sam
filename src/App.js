import React from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        completed: false
      },
    ]
  }
  render() {    
      return (
          <div className="App">
              <Todos todos={this.state.todos} />   
          </div>
      );
  }    
}

export default App;
