import './Gear.css'
import gearImage from '../../assets/shared/desktop/image-best-gear.jpg'
import gearImageTablet from '../../assets/shared/tablet/image-best-gear.jpg'
import gearImageMobile from '../../assets/shared/mobile/image-best-gear.jpg'

const Gear = () => {
  return (
    <section className='container gear-container'>
      <div className="gear-desktop-container">
        <div className="gear-texts">
          <h2>
            Bringing you the <span className='gear-span'>best</span> audio gear
          </h2>
          <p className='gear-p'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img className='gear-image' src={gearImage} alt="gear image" />
      </div>
      <div className="gear-tablet-container">
        <img className='gear-image' src={gearImageTablet} alt="gear image" />
        <div className="gear-texts">
          <h2>
            Bringing you the <span className='gear-span'>best</span> audio gear
          </h2>
          <p className='gear-p'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <div className="gear-mobile-container">
        <img className='gear-image' src={gearImageMobile} alt="gear image" />
        <div className="gear-texts">
          <h2 className='gear-h2'>
            Bringing you the <span className='gear-span'>best</span> audio gear
          </h2>
          <p className='gear-p'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Gear