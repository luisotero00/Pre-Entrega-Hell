import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer-Container'>

        <div className='Footer-links'>
          <h4>HellShoes</h4>
          <ul className='links'>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Instagram</a></li>
            <li><a href='#'>Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer
