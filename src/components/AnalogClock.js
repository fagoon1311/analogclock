import React from 'react';

const AnalogClock = () => {
  const digits = [1,2,3,4,5,6,7,8,9,10,11,12]
  let radius = 150
  let centreoffset = radius - 20
  return (
    <div className='bg-gray-900 h-[300px] w-[300px] rounded-full relative flex items-center justify-center'>
      {
        digits.map((digit)=>(
          <div className='absolute'
            style={{
              transform:`rotate(${digit*30}deg) translateY(-${centreoffset}px)`,
              transformOrigin: 'center'
            }}
          >
            <span className='text-white font-bold'
              style={{
                transform: `rotate(-${digit*30}deg)`
              }}
            >{digit}</span>

          </div>
        ))
      }
    </div>
  )
};

export default AnalogClock;
