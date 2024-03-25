import { Component } from "react";

class MyComponent extends Component {
  // mount 되었을 때
  componentDidMount() {
    console.log(`class component, mount 됨!!`);
  }

  // update 되었을 때
  componentDidUpdate() {
    console.log(`class component, update 됨!!`);
  }

  // unmount 예정일 때
  componentWillUnmount() {
    console.log(`class component, unmount 됨!!`);
  }

  render() {
    return (
      <div>
        <p>My Component {this.props.number}</p>
      </div>
    );
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeNumberState}>number + 1</button>
        <button onClick={this.changeVisibleState}>on/off</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </div>
    );
  }
}

export default LifeCycleClass;
