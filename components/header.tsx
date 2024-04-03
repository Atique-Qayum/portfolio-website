import React from 'react'

export default function header() {
  return (
    <header className='z-[999] relative'>
        <div className='fixed top-0 left-1/2 -translate-x-1 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shoadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top sm:h-[3.25] sm:rounded-full'></div>
    </header>
  );
}
