import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainComponent.css";

export default function MainComponent() {
  const [login, setLogin] = useState(false);

  function handleLogin() {
    setLogin(login ? false : true);
    console.log(login);
  }

  return (
    <>
      <Header
        handleLogin={handleLogin}
        statusLogin={login ? "Logout" : "Login"}
      />

      <div className="MainComponent">
        {login ? <h1>This is MainComponent! Hello</h1> : ""}
      </div>

      <Footer />
    </>
  );
}
