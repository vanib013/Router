import React, {Component} from 'react';

class Counter extends Component {

  constructor(){
    super();
    this.state= {counter: 0};
    this.handleIncrement=this.handleIncrement.bind(this);
    this.handleDecrement=this.handleDecrement.bind(this);
  }

 handleIncrement() {
   this.setState ({ counter: this.state.counter + 1 });
 }

 handleDecrement(){
   this.setState ({counter: this.state.counter - 1 });
 }

  render() {
    

    return (
      <div className="container-fluid col-sm-offset-2 col-sm-9">

        <div className="panel panel-default">
          <div className="panel-heading col-sm-12">
            <h3 className="panel-title pull-left">Counter</h3>

            <a className="btn btn-primary btn-sm pull-right"
               href="#" onClick={this.handleDecrement}><span className="glyphicon glyphicon-minus"></span> Decrement! </a>
            <a className="btn btn-primary btn-sm pull-right "
               href="#" onClick={this.handleIncrement}><span className="glyphicon glyphicon-plus"></span> Increment! </a>
          </div>
          <div className="panel-body pull-center">
              <p> {this.state.counter} </p>
          </div>
        </div>

      </div>
    );
  }
}
export default Counter;
