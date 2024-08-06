import React, { Component } from "react";

export default class BoxClass extends Component {
  componentWillUnmount() { // 컴포넌트가 종료될때 실행 됨.
    console.log("componentWillUnmount");
  }
  render() {
    return <div>Box {this.props.num}</div>;
  }
}
