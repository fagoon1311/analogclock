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

      {/* Hour Hand */}
      <div
        className='absolute w-1 bg-yellow-300 rounded-r-full'
        style={{
          height: '70px',
          transform: `translateY(-35px) rotate(${hourRot}deg) `,
          transformOrigin: 'bottom center',
        }}
      ></div>

      {/* Minute Hand */}
      <div
        className='absolute w-1 bg-white rounded-r-full'
        style={{
          height: '100px',
          transform: `translateY(-50px) rotate(${minRot}deg) `, // the order of translate matters, if you use rotate first then it will rotate first and then translate to position therefore not rotating at centre rather than like a circling effect
          transformOrigin: 'bottom center',
        }}
      ></div>

      {/* Second Hand */}
      <div
        className='absolute w-1 bg-red-700 rounded-r-full'
        style={{
          height: '110px',
          transform: `translateY(-55px) rotate(${secRot}deg) `,
          transformOrigin: 'bottom center',
        }}
      ></div>
    </div>
  );
};

export default AnalogClock;
