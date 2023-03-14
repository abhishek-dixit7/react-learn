import React, { Component } from "react";
import ParentComponent from "./ParentComponent";

const ChildComponent = ({ greetMe }) => {
  return (
    <div>
      {greetMe ? greetMe : "Hi"} From ChildComponent!
      <ParentComponent greetings="Namaste" />
      <ParentComponent greetings="Kasa Kai" />
    </div>
  );
};

export default ChildComponent;
