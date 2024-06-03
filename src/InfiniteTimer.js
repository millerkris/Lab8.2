import React, { useState, useEffect } from 'react';

const InfiniteTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <div>Timer: {count}</div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause ⏸️' : 'Play ▶️'}
      </button>
    </div>
  );
};

export default InfiniteTimer;