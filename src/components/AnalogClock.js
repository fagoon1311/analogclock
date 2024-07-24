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
      <div className='h-2 w-2 rounded-full bg-white absolute'></div>

      <div className='absolute w-2 h-[100px] bg-white'
      style={{
        transformOrigin:'bottom center', // sets origin to bottom centre
        transform: 'translateY(-50px)'
      }}></div> 
      <div className='absolute w-2 h-[110px] bg-red-700'style={{
        transformOrigin:'bottom center', // sets origin to bottom centre
        transform: 'translateY(-55px)'
      }}></div>
      <div className='absolute w-2 h-[70px] bg-yellow-200'style={{
        transformOrigin:'bottom center', // sets origin to bottom centre
        transform: 'translateY(-35px)'
      }}></div>
    </div>
  )
};

export default AnalogClock;
