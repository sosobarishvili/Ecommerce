import './EarphonesSection.css'
import earphones from '../../assets/home/desktop/image-earphones-yx1.jpg'
import earphonesTablet from '../../assets/home/tablet/image-earphones-yx1.jpg'
import earphonesMobile from '../../assets/home/mobile/image-earphones-yx1.jpg'
import { Link } from 'react-router-dom'



const EarphonesSection = () => {
  return (
    <section className='container earphones-section-container'>
      <picture className='left-earphones-section'>
        <source media="(max-width: 500px)" srcSet={earphonesMobile} />
        <source media="(max-width: 1000px)" srcSet={earphonesTablet} />
        <img className="earphones-section-img " src={earphones} alt='earphones' />
      </picture>
      <div className="right-earphones-section">
        <h4 className='earphones-section-h4'>
          YX1 EARPHONES
        </h4>
        <Link to={`product/yx1-earphones`}>
          <button className='button-2'>see product</button>
        </Link>
      </div>
    </section>
  )
}

export default EarphonesSection