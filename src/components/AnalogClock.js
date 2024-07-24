import React, { useEffect, useState } from 'react';

const AnalogClock = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [hourRot, setHourRot] = useState(0);
  const [minRot, setMinRot] = useState(0);
  const [secRot, setSecRot] = useState(0);

  const radius = 150;
  const centerOffset = radius - 20; // adjust if needed

  const displayTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    const h_rotation = (hour % 12) * 30 + minute / 2;
    const m_rotation = minute * 6;
    const s_rotation = seconds * 6;

    setHourRot(h_rotation);
    setMinRot(m_rotation);
    setSecRot(s_rotation);
  };

  useEffect(() => {
    const interval = setInterval(displayTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-gray-900 h-[300px] w-[300px] rounded-full relative flex items-center justify-center'>
      {digits.map((digit) => (
        <div
          key={digit}
          className='absolute'
          style={{
            transform: `rotate(${digit * 30}deg) translateY(-${centerOffset}px)`,
            transformOrigin: 'center',
          }}
        >
          <span
            className='text-white font-bold'
            style={{
              transform: `rotate(-${digit * 30}deg)`,
            }}
          >
            {digit}
          </span>
        </div>
      ))}

      <div className='h-2 w-2 rounded-full bg-white absolute'></div>

      {/* Minute Hand */}
      <div
        className='absolute w-2'
        style={{
          height: '100px',
          backgroundColor: 'white',
          transform: `rotate(${minRot}deg) translateY(-50px)`,
          transformOrigin: 'bottom center',
        }}
      ></div>

      {/* Second Hand */}
      <div
        className='absolute w-2'
        style={{
          height: '110px',
          backgroundColor: 'red',
          transform: `rotate(${secRot}deg) translateY(-55px)`,
          transformOrigin: 'bottom center',
        }}
      ></div>

      {/* Hour Hand */}
      <div
        className='absolute w-2'
        style={{
          height: '70px',
          backgroundColor: 'yellow',
          transform: `rotate(${hourRot}deg) translateY(-35px)`,
          transformOrigin: 'bottom center',
        }}
      ></div>
    </div>
  );
};

export default AnalogClock;
