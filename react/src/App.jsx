import React, {Component} from 'react';
import Counter from './Components/Counter.jsx';
import ToDoList from './Components/ToDoList.jsx';
import AppNavBar from './Components/AppNavBar.jsx';

class App extends Component {
  render() {
    return (
      <div>

        <AppNavBar />


        <Counter />
        <ToDoList />

      </div>
    );
  }
}
export default App;
