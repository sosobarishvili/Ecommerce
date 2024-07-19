import './Products-section.css'

import Headphone from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Earphone from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import Speaker from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'

import Card from '../Card/Card'
import { Link } from 'react-router-dom'

const ProductsSection = () => {
  return (
    <section className="container products-section">
      <Link className='products-section-cards' to={'/headphones'}>
        <Card func={() => { }} image={Headphone} alt={'headphone'} product={'HEADPHONES'} />
      </Link>
      <Link className='products-section-cards' to={'/speakers'}>
        <Card func={() => { }} image={Speaker} alt={'speaker'} product={'SPEAKERS'} />
      </Link>
      <Link className='products-section-cards' to={'/earphones'}>
        <Card func={() => { }} image={Earphone} alt={'earphone'} product={'EARPHONES'} />
      </Link>
    </section>
  )
}

export default ProductsSection;