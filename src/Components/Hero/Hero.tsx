import { Link } from 'react-router-dom'
import './Hero.css'
import backgroundImage from '../../assets/home/desktop/image-hero.jpg'
import backgroundImageTablet from '../../assets/home/tablet/image-header.jpg'
import backgroundImageMobile from '../../assets/home/mobile/image-header.jpg'



const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="container hero-container">
        <div className="image-container">
          <picture>
            <source media="(max-width: 500px)" srcSet={backgroundImageMobile} />
            <source media="(max-width: 1000px)" srcSet={backgroundImageTablet} />
            <img className="background-image" src={backgroundImage} alt='background image' />
          </picture>
        </div>
        <div className="hero-texts">
          <p className="overline-gray">
            new product
          </p>
          <h1 className='h1-hero-mobile'>XX99 Mark II HeadphoneS</h1>
          <p className='hero-p'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to={`product/xx99-mark-two-headphones`}>
            <button className='button-1'>see product</button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Hero