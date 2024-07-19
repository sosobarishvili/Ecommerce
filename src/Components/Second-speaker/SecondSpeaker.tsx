import { Link } from 'react-router-dom'
import './SecondSpeaker.css'

const SecondSpeaker = () => {
  return (
    <section className='container second-speaker'>
      <div className="second-speaker-container">
        <h4>ZX7 SPEAKER</h4>
        <Link to={`product/zx7-speaker`}>
          <button className='button-2'>see products</button>
        </Link>
      </div>
    </section>
  )
}

export default SecondSpeaker