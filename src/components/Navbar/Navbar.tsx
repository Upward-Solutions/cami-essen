import React from 'react';

const Navbar = () => {
  return (
    <header className='absolute top-0 z-50 flex items-center justify-center w-full h-12 bg-card-background shadow-lg'>
      <div className='flex justify-between w-full p-4 tablet:p-0 tablet:max-w-3xl'>
        <span>Cami Essen placeholder</span>
        <ul className='flex gap-4'>
          <li>FB</li>
          <li>TW</li>
          <li>IG</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
