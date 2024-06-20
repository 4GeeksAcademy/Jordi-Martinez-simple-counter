import React, { useState, useEffect } from 'react';

const styleOne = {
	fontSize: "200px",
	backgroundColor: "black",
	color: "white",
  textAlign: "center",

};

const Timer = () => {
  const [seconds, setSeconds] = useState(0);  
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setSeconds(seconds => seconds + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePauseResume = () => {
    setIsPaused(prevPaused => !prevPaused);
  };
    return(
    <div>
      <p style={styleOne}>
        <i className="far fa-clock"></i>
        {(Math.floor(seconds/100000))%10}        
        {(Math.floor(seconds/10000))%10}        
        {(Math.floor(seconds/1000))%10}
        {(Math.floor(seconds/100))%10}
        {(Math.floor(seconds/10))%10}        
        {(Math.floor(seconds))%10}
      </p>
      <button onClick={handlePauseResume} className='col-12'>
        {isPaused ? 'Reanudar' : 'Pausar'}
      </button>
    </div> 
    ) 
};

export default Timer;

