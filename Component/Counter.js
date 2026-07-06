"use client";
import React, { useState, useEffect } from "react";

const Counter = () => {
  console.log("hello");
  const [show, setShow] = useState(true);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button onClick={()=>setShow(!show)} style={{ color: "orange" }}>Toogle</button>
      {show && <Timer></Timer>}
    </div>
  );
};
const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(()=>{
   const interval = setInterval(()=>{
      if(!isRunning) return;
    setTime(prev=>prev+1)
   }, 1000);

   return () =>{
      console.log("cleanup");
      clearInterval(interval);
   }
  },[isRunning]);
  const formatTime=(totalTime)=>{
    const mins = Math.floor(totalTime /60);
    console.log(mins % 60 )
    const sec = Math.floor(totalTime % 60) ;
    console.log(sec)
    return `${String(mins).padStart(2,'0')}: ${String(sec).padStart(2,0)} mm:ss` 
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>Timer : {formatTime(time)} {time}</p>
      <button onClick={()=>setIsRunning(false)} style={{ color: "red" }}>Stop</button>
      <button onClick={()=>setIsRunning(true)} style={{ color: "green" }}>Start</button>
      <button onClick={()=>setTime(0 )} style={{ color: "Blue" }}>Reset</button>
    </div>
  );
};

export default Counter;
