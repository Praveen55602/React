import React, { Component } from "react";

//life cycle methods to override are available only with class component
class LifeCycleDemo extends Component {
  constructor(props) {
    console.log("Construtor called ");
    super(props); // super is called so that all necessary steps and initialization are performed which are required for the component as it's inheriting from component

    //we can initialize states here as well as inside any other function but not without a function
    this.state = {
      count: 0,
    };
  }
  //all the overriden functions are called in order
  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={this.IncrementCounter}>Increment Counter</button>
        <button onClick={this.DecrementCounter}>Decrement Counter</button>
        Counter : {this.state.count}
      </div>
    );
  }

  //called just after render function once at the starting when component is mounted for the first time
  componentDidMount() {
    console.log("Component Mounted");
    console.log("-----------------------");
  }

  //whenever any state is updated
  componentDidUpdate(prevProps, prevState, snanpshot) {
    console.log("Component just Updated");
    console.log("-------------------------");
  }

  //called when the component is unmounted
  componentWillUnmount() {
    console.log("component unmounted");
    console.log("------------------------");
  }

  //custom function
  IncrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  //custom function
  DecrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default LifeCycleDemo;
