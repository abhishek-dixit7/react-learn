import React, { Component } from "react";

export default class Component2 extends Component {
  constructor() {
    super();
    this.state = { name: "Hanu" };
  }
  render() {
    return <>Hello! this is Component2 {this.state.name}</>;
  }
}
