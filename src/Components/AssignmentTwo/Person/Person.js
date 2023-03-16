import React from "react";
import "./Person.css";

const Person = ({ name, qualification, id }) => {
  return (
    <li>
      Item: {id}
      <br />
      Name: {name}
      <br />
      Qualification: {qualification}
      <br />
      Id: {id}
      <br />
      ------------------------------
      <br />
    </li>
  );
};

export default Person;
