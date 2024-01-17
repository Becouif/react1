import React from "react";


function greeting(){
  const date = new Date().getHours();
  let greeting;

  const customStyle = {
    color: ''
  }

  if(date < 12){
    greeting = "good morning";
    customStyle.color = 'red';
  }
  else if (date < 18){
    greeting = "good afternoon";
    customStyle.color = "green";
  } else {
    greeting = "good evening";
    customStyle.color = "purple";
  }

  return (
    <div>
      <h1 style={customStyle}>{greeting}</h1>
    </div>
  )
}

export default greeting;