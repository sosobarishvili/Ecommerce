import arrowRight from '../../assets/shared/desktop/icon-arrow-right.svg'
import './Card.css'

type CardProps = {
  image: string,
  alt: string,
  product: string,
  func: () => void
}


const Card = ({ image, alt, product, func }: CardProps) => {

  return (
    <div onClick={func} className="product-section-card">
      <img className='product-section-image' src={image} alt={alt} />
      <h5>
        {product}
      </h5>
      <div className="shop-button">
        <button className='button-shop'>SHOP</button>
        <img src={arrowRight} alt="arrow right" />
      </div>
    </div>
  )
}

export default Card