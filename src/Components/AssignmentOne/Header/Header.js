import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";

export default function Header({ handleLogin, statusLogin }) {
  return (
    <div className="header">
      <h4>This is Header</h4>
      <Button onClick={handleLogin} className="loginButton">
        {statusLogin}
        {console.log(statusLogin)}
      </Button>
    </div>
  );
}
