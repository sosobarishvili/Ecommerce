import './Footer.css'
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/shared/desktop/logo.svg'

import { Facebook, Instagram, Twitter } from '../../Socials/Socials'

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="container">
          <div className="footer-line"></div>
        </div>
        <div className="container footer-flex">
          <div className="logo-div">
            <Link to={'/'}><img className='logo' src={logo} alt="audiophile" /></Link>
          </div>
          <nav>
            <ul className='footer-links-flex'>
              <li>
                <NavLink className={'footer-link'} to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink className={'footer-link'} to={'/headphones'}>Headphones</NavLink>
              </li>
              <li>
                <NavLink className={'footer-link'} to={'/speakers'}>Speakers</NavLink>
              </li>
              <li>
                <NavLink className={'header-link'} to={'earphones'}>Earphones</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container audiophile-discription">
          <p className="footer-p">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="socials">
            <Link to={'https://www.facebook.com/'}><Facebook /></Link>
            <Link to={'https://x.com/'}><Twitter /></Link>
            <Link to={'https://www.instagram.com/'}><Instagram /></Link>
          </div>
        </div>
        <p className="container copyright">
          Copyright 2021. All Rights Reserved
        </p>
      </footer>
      <footer className="footer-container-tablet">
        <div className="container container-tablet">
          <div className="footer-line footer-line-tablet"></div>
          <div className="logo-div">
            <Link to={'/'}><img className='logo' src={logo} alt="audiophile" /></Link>
          </div>
          <nav>
            <ul className='footer-links-tablet'>
              <li>
                <NavLink className={'footer-link'} to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink className={'footer-link'} to={'/headphones'}>Headphones</NavLink>
              </li>
              <li>
                <NavLink className={'footer-link'} to={'/speakers'}>Speakers</NavLink>
              </li>
              <li>
                <NavLink className={'header-link'} to={'earphones'}>Earphones</NavLink>
              </li>
            </ul>
          </nav>
          <p className="footer-p footer-p-tablet">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="footer-copyright-tablet">
            <p className="copyright">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="socials">
              <Link to={'https://www.facebook.com/'}><Facebook /></Link>
              <Link to={'https://x.com/'}><Twitter /></Link>
              <Link to={'https://www.instagram.com/'}><Instagram /></Link>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer