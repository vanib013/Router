import React, {Component} from 'react';

class ToDoList extends Component {


  constructor() {
    super();
    this.state= {
      Todo: []
    }
  }



  getTodos() {
    this.setState ({ Todo: [
      {
        name: 'vani',
        city: 'bangalore'
      },
      {
        name: 'deepika',
        city: 'bangalore'
      }
    ]});
  }

  componentWillMount() {
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    console.log(this.state);


    return (
      <div>

      </div>
    );
  }
}

export default ToDoList;
