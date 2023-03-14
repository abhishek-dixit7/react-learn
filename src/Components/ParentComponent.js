import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ParentComponent extends Component {
  constructor() {
    super();
    this.state = { value: "I'm a State" };
  }

  changeState() {
    this.setState({ value: "I'm updated State" }, () => {
      console.log(this.state.value);
    });
  }

  render() {
    return (
      <div>
        {this.props.greetings} From ParentComponent
        <p>
          {this.state.value}
          <Button
            onClick={() => {
              this.changeState();
            }}
          >
            Click Me
          </Button>
        </p>
      </div>
    );
  }
}
