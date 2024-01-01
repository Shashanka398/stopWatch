import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useRef } from 'react';
function formData(timer){
  const mins=Math.floor(timer/60);
  timer %=60
 return `${mins}:${timer<10?"0":""}${timer}`;
}
function App() {
  const [activated,setActivated]=useState(false);
  const [timer,setTimer]=useState(0);
  const timerId=useRef(null)
   const onHandle=()=>{
      setActivated(!activated);
   }
    const reset=()=>{
      setTimer(0)
      setActivated(false)
    }
   useEffect(() => {
    if(activated)
    {
     timerId.current=setInterval(() => {
        setTimer((prevState) => prevState + 1);
      }, 1000);
    }
  return ()=>{
    clearInterval(timerId.current)
  }
  }, [activated,timer]); 

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <span>Time : </span><span>{formData(timer)}</span>
      <div>
      <button onClick={onHandle}>{activated?"Stop":"Start"}</button>
      <button onClick={reset}>Reset</button>

      </div>
     

     
    </div>
  );
}

export default App;
