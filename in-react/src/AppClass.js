import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log("constructor"); // 1
  }
  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    console.log("increase", this.state); // counter2: 0, value: 0
  };

  componentDidMount() { // UI 세팅이 완료되면 알려줌
    // api 콜
    console.log("componentDidMount"); // 3
  }

  componentDidUpdate() { // state가 업데이트 되면 알려줌
    console.log("componentDidUpdate", this.state); // counter2: 1, value: 1
  }
  render() {
    console.log("render"); // 2
    return (
      <div>
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>클릭</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
