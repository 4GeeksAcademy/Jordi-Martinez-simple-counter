import React, { useState, useEffect } from 'react';

const styleOne = {
	fontSize: "200px",
	backgroundColor: "black",
	color: "white",
  textAlign: "center",

};

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
if (seconds < 10) {
  return (
    <div style={styleOne}>
      <i class="far fa-clock"></i> 00000{seconds}
    </div>
  );
} else if (seconds<100) {
  return (
    <div style={styleOne}>
      <i class="far fa-clock"></i> 0000{seconds}
    </div>
  )
}else {
  return (
    <div style={styleOne}>
      <i class="far fa-clock"></i> 000{seconds}
    </div>
  )
}
  
};

export default Timer;

