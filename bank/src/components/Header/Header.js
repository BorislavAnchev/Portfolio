import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.png';

const Header = (props) => {
  return (
    <header data-testid='Header Component'>
      <div className='logo'>
        <img data-testid='Logo Image' className='LogoTest' src={Logo} alt='Logo' />
      </div>
    </header>
  )
}

export default Header;