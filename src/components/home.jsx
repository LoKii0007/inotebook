import React from "react";
import Notes from "./notes";

const Home = () => {
  const token = localStorage.getItem("token")

  if (token) {
    return (
      <div className="container">
        <h1>iNotebook</h1>
        <Notes />
      </div>
    )
  }
  else {
    return (
      <h1 className="text-center">you need to login first</h1>
    )
  }
};

export default Home;
