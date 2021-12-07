import './Bank.css'
import React from 'react';

export default function LogoutTimer(props) {

    const [timer, setTimer] = React.useState(5*60);
        timer === 0 && (window.location.href="/")
        const min = Math.floor(timer/60);
        const sec = Math.floor(timer%60);
        const id =React.useRef(null);
        const clear=()=>{
        window.clearInterval(id.current)
        }
        React.useEffect(()=>{
            id.current=window.setInterval(()=>{
            setTimer((time)=>time-1)
            },1000)
            return ()=>clear();
        },[])

        React.useEffect(()=>{
            if(timer===0){
            clear()
            }

        },[timer])
    
    return (
        <p className="logout-timer">
            You will be logged out in <span class="timer">{min<10&&0}{min}:{sec<10&&0}{sec}</span>
        </p>
    );
  }