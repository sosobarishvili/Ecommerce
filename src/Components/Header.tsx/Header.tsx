import './Header.css';
import logo from '../../assets/shared/desktop/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import CardModal from '../Modal/CardModal';
import hamburger from '../../assets/shared/tablet/icon-hamburger.svg';
import { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const handleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  useEffect(() => {
    if (dropMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [dropMenu]);

  const closeModal = () => {
    setDropMenu(false);
  };

  return (
    <header className="header-container">
      <div className="container header-flex">
        <div className="menu-logo">
          <button className='burger-button' onClick={handleDropMenu}>
            <img className='hamburger-icon' src={hamburger} alt="burger-menu" />
          </button>
          <div className="logo-div">
            <Link to={'/'}><img className='logo' src={logo} alt="audiophile" /></Link>
          </div>
        </div>
        <nav className='header-navigation-links-container'>
          <ul className='header-links-flex'>
            <li>
              <NavLink className={'header-link'} to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink className={'header-link'} to={'/headphones'}>Headphones</NavLink>
            </li>
            <li>
              <NavLink className={'header-link'} to={'/speakers'}>Speakers</NavLink>
            </li>
            <li>
              <NavLink className={'header-link'} to={'/earphones'}>Earphones</NavLink>
            </li>
          </ul>
        </nav>
        <div className="cart-icon">
          <CardModal />
        </div>
      </div>
      <BurgerMenu modalIsOpen={dropMenu} closeModal={closeModal} func={handleDropMenu} />
    </header>
  );
};

export default Header;