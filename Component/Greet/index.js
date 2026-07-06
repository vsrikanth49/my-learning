import React, { useState, useEffect } from "react";
import './greet.css'
const Greet = () => {
  const [currrentTime, setCurrentTime] = useState();

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const getSession = () =>{
    let hours = new Date().getHours();
    if(hours >= 5 && hours < 12) {
        return "Good morning!🔆🌄 ";
    } else if (hours >= 12 && hours < 17) {
     return  "Good Afternoon!🌄"
    }
    else if (hours >= 17 && hours < 21) {
     return  "Good Evening"
    }
    else {
     return  "Good Night"
    }
  }
  return (
    <div
    
      style={{
       
         width:"500px",
        padding: "50px",
        margin:"50px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        color: "#333",
     
      }}
    >
      <h1 data-test-id="greeting" >{getSession()}</h1>
      <p data-test-id = "time">Time : {currrentTime}</p>
     
    </div>
  );
};

export default Greet;
