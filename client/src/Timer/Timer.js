import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router';

import QuizContext from '../QuizContext/QuizContext';

const Timer = () => {

   const value = useContext(QuizContext);
   const[seconds, setSeconds] = useState(30);
   const[clockTimer, setClockTimer] = useState(null);


   const handleCountdown = (e) => {
    e.preventDefault();
    console.log('Countdown has started');
    
    if (!clockTimer  && seconds > 0) {
        intervalHandle = setInterval(countdown, 1000);

        setClockTimer(intervalHandle);
        
       
        
    } 

    
    
   }

   const stopCountdown = (e) => {
       e.preventDefault()
       console.log('Countdown has stopped');
       setSeconds(30);
       clearInterval(clockTimer)
   }

   
   let counter = 30;
   const countdown = () => {
       
       
       setSeconds(
           seconds => seconds - 1
       )
       counter--
       console.log('counter', counter);
       if (counter < 0) {
        clearInterval(clockTimer);
        // console.log('Countdown has stopped');
        setSeconds('No more');
        // counter = 30;
        value.display = !value.display;
        console.log(value.display);
        
       }

   }

   useEffect(() => {
       if (seconds === 0) {
           return () => clearInterval(clockTimer)
       }
   }, [seconds, clockTimer])

   let secondsRemaining;
   let intervalHandle;


   

    return (
       <div className='container w-50'>
        <div className='start-timer text-danger bg-light border border-danger rounded sticky-top'>
          <p className='font-weight-bold'>{seconds} seconds remaining</p>
          <button onClick={handleCountdown}>Start</button>
          <button onClick={stopCountdown}>Stop</button>
        </div>

        </div>
       
    )
}

export default Timer;