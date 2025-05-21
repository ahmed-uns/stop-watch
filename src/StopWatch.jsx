import { useState,useRef,createContext, useContext, useEffect } from "react";




function StopWatch () {
    const [isRunning,setIsRunning] = useState(false)
    const [elapsedTime,setElapsedTime] = useState(0)
    const intervalIdRef =useRef(null)
    const startTimeRef =useRef(0)
    useEffect(()=>{
        if(isRunning) {
           intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
                }, 10);
            return () => {
                clearInterval(intervalIdRef.current)
            }
        }
         },[isRunning])

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime
    }
    function stop() {
        setIsRunning(false)
    }
    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }
    function formatTime() {
       let min = Math.floor(elapsedTime / (1000 * 60 ))
       let sec = Math.floor((elapsedTime / 1000 % 60))
       let milsec = elapsedTime % 1000 
       min = String(min).padStart(2,'0')
       sec = String(sec).padStart(2,'0')
       milsec = String(Math.floor(milsec/10)).padStart(2,'0')
       return `${min}:${sec}:${milsec}`;
        
    }
    
    return (
        <div id="outer-box">
            <div id="time">{formatTime()}</div>
            <div id="forma">min : sec : millisec</div>
            <div id="keys-pad">
            <button onClick={start} id="start-btn">Start</button>
            <button onClick={stop} id="stop-btn">Stop</button>
            <button onClick={reset} id="reset-btn">Reset</button>
            </div>
            
        </div>
    )
}
export default StopWatch ;