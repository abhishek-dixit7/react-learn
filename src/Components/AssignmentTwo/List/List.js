import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Person from "../Person/Person";
import "./List.css";

const List = () => {
  const [click, setClick] = useState(false);
  const datas = [
    { id: 1, name: "Abhishek", qualification: "Btech" },
    { id: 2, name: "Kshitiz", qualification: "BA" },
    { id: 3, name: "Cutie", qualification: "10thFail" },
  ];

  const finalList = datas.map((data) => (
    <Person
      key={data.id}
      id={data.id}
      name={data.name}
      qualification={data.qualification}
    />
  ));

  return (
    <div className="list">
      <Button
        onClick={() => {
          setClick(click ? false : true);
          console.log(click);
        }}
      >
        {click ? "Hide List" : "Show List"}
      </Button>
      {click ? finalList : ""}
    </div>
  );
};

export default List;
