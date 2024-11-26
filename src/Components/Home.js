import React from "react";
import img from "./images/01.jpg"

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to My Portfolio</h2>
      <p>This is the Home page.</p>
      <img src={img}/>
      
    </div>
  );
};

export default Home;
