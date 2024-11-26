import React from "react";
import img from "./images/01.jpg"

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>This is the About page.</p>
      <img src={img}/>

    </div>
  );
};

export default About;
