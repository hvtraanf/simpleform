import React from 'react';

const Footer = () => {
  return (
    <footer>
        <hr></hr>
        <p className='text-black'>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
