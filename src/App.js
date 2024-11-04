import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div className="clock">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default DigitalClock;