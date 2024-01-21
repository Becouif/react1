import React from "react";


// i cant use state in this component so i use props to get the data 
// and use state to handle it in App.js 






function myEvent(props){


    return (

      <div className="container event-handle">
  
      <h1>{props.heading} {props.myname}</h1>
      <form onSubmit={props.submit}>
        <p>{props.username}</p>
        {/* when using state to monitor input set value too to the value of the state  */}
        {/* this is in App.jsx  */}
        {/* using onChange on input allow you to get access to the event.target.value which is use in app.jsx  */}
        <input onChange={props.change} value={props.myvalue} className="event-input" type="text" placeholder="What's your name?" />
        <button type="submit" style={props.mystyle} onMouseOut={props.mouseOut} onClick={props.onClick} onMouseOver={props.mouseOver} className="event-btn">Submit</button>
      </form>
    </div>
    )
  
}

export default myEvent;