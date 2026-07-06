import React ,{useEffect,useState} from 'react';
import "./bar.css";
const Progress = () => {
    const [percentage, setPercntage] = useState(0);
    
    const handleclick =(del) => {
       setPercntage(prev=> Math.max(0, Math.min(100, prev +del) ))
    }
  const getcolor = ()=>{
    if(percentage >= 80) return 'p-bar-green';
    if(percentage >= 40) return 'p-bar-orange';
   return 'p-bar-red';
   
  }
  return (
    <div style={{display:'flex', flexDirection:"column",alignItems:"center",gap:"20px"}}>
      <h1>Welcome to progress bar</h1>
      <div className={`p-bar`} style={{height:"25px",backgroundColor:"#ddd", overflow:"hidden"}} >
      <div style={{width:`${percentage}%`}} className={`${getcolor()}` }>
        <span>{percentage}%</span>
      </div>
      </div>
      <div  className="button-align">
      <button  onClick={()=> handleclick(-10)}>-10%</button>
      <button onClick={()=> handleclick(10)}>+10%</button>
      </div>
    </div>
  );
};

export default Progress;
