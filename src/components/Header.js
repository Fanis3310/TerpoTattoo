import React from 'react';
// image
import Logo from '../assets/bg/logoV1.1.png';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/*logo*/}
        <a href='#'>
          <img src={Logo} alt=''/>
        </a>
        {/*button*/}
        <button className='btn btn-sm'>
          Booking now
        </button>
      </div>
    </div>
    </header>;
};

export default Header;
