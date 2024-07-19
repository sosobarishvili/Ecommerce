import './SpeakerSection.css'
import speakerImg from '../../assets/home/desktop/image-speaker-zx9.png'
import speaker from '../../assets/home/tablet/image-speaker-zx9.png'
import speakerMobile from '../../assets/home/mobile/image-speaker-zx9.png'
import circles from '../../assets/home/desktop/pattern-circles.svg'
import { Link } from 'react-router-dom'



const SpeakerSection = () => {
  return (
    <section className='container speaker-section-container'>
      <div className="speaker-section">
        <div className="speaker-section-left">
          <img className='speaker-section-image' src={speakerImg} alt="speaker" />
        </div>
        <div className="speaker-section-right">
          <h1>ZX9 SPEAKER</h1>
          <p className='speaker-section-p'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link to={`product/zx9-speaker`}>
            <button className='button-3'>see product</button>
          </Link>
        </div>
        <img className='speaker-circles' src={circles} alt="circles" />
      </div>
      <div className="speaker-section-tablet">
        <img className='speaker-section-image-tablet' src={speaker} alt="speaker" />
        <h1 className='h1-speaker-section-tablet'>ZX9 SPEAKER</h1>
        <p className='speaker-section-p speaker-section-p-tablet'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to={`product/zx9-speaker`}>
          <button className='button-3'>see product</button>
        </Link>
        <img className='speaker-circles-tablet' src={circles} alt="circles" />
      </div>
      <div className="speaker-section-mobile">
        <img className='speaker-section-image-tablet' src={speakerMobile} alt="speaker" />
        <h1 className='h1-speaker-section-mobile'>ZX9 SPEAKER</h1>
        <p className='speaker-section-p speaker-section-p-mobile'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to={`product/zx9-speaker`}>
          <button className='button-3'>see product</button>
        </Link>
        <img className='speaker-circles-mobile' src={circles} alt="circles" />
      </div>
    </section>
  )
}

export default SpeakerSection