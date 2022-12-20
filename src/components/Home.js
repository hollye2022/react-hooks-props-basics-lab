import React from "react";

function Home(props) {
 const divStyle = {
  color: props.color
 }
  
  return (
    <div id="home">
      <h1 style={divStyle}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
  
}

export default Home;
