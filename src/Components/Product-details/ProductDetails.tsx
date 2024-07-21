import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Store/CartSlice'
import './ProductDetails.css';
import GoBackButton from '../Goback/GoBackButton';
import { Link } from 'react-router-dom';
import { Root } from '../../Types/Types';

type ProductDetailProps = {
  product: Root;
};

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  const addToCartHandler = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: count,
      totalPrice: product.price * count,
      image: product.image.desktop,
      imageTablet: product.image.tablet,
      imageMobile: product.image.mobile,
    }));
  };

  const formatNumber = (number: number) => {
    return number.toLocaleString()
  }

  return (
    <div className="container">
      <GoBackButton />
      <div className='product-container'>
        <picture>
          <source media="(max-width: 500px)" srcSet={`${product.image.mobile}`} />
          <source media="(max-width: 1000px)" srcSet={`${product.image.tablet}`} />
          <img className="details-image" src={`${product.image.desktop}`} alt={product.name} />
        </picture>
        <div className="product-details">
          {product.new && <p className="overline details-overline">new product</p>}
          <h2 className="details-h2">{product.name}</h2>
          <p className="details-p">{product.description}</p>
          <h5>$ {formatNumber(product.price)}</h5>
          <div className="add-to-cart">
            <div className="counter">
              <button className='plus-minus' onClick={decrease}>-</button>
              <span className='price-span'>{count}</span>
              <button className='plus-minus' onClick={increase}>+</button>
            </div>
            <button className="button-1" onClick={addToCartHandler}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="details-features">
        <div className="features-text">
          <h3>FEATURES</h3>
          <p className='features-p'>
            {product.features.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="in-box">
          <h3>IN THE BOX</h3>
          <div className="inside-box">
            {product.includes.map((item, index) => (
              <li className='box-list' key={index}>
                <span className='box-quantity'>{item.quantity}x</span>
                <span className='box-item'>{item.item}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="details-images">
        <div className="left-images">
          <picture>
            <source media="(max-width: 500px)" srcSet={`${product.gallery.first.mobile}`} />
            <source media="(max-width: 1000px)" srcSet={`${product.gallery.first.tablet}`} />
            <img className="details-image" src={`${product.gallery.first.desktop}`} alt={product.name} />
          </picture>
          <picture>
            <source media="(max-width: 500px)" srcSet={`${product.gallery.second.mobile}`} />
            <source media="(max-width: 1000px)" srcSet={`${product.gallery.second.tablet}`} />
            <img className="details-image" src={`${product.gallery.second.desktop}`} alt={product.name} />
          </picture>
        </div>
        <div className="right-images">
          <picture>
            <source media="(max-width: 500px)" srcSet={`${product.gallery.third.mobile}`} />
            <source media="(max-width: 1000px)" srcSet={`${product.gallery.third.tablet}`} />
            <img className="details-image details-image-third" src={`${product.gallery.third.desktop}`} alt={product.name} />
          </picture>
        </div>
      </div>
      <div className="others-container">
        <h3 className='details-features-h3'>YOU MAY ALSO LIKE</h3>
        <div className="other-section">
          {product.others.map((item, index) => (
            <li className="others-list" key={index}>
              <picture>
                <source media="(max-width: 500px)" srcSet={`${item.image.mobile}`} />
                <source media="(max-width: 1000px)" srcSet={`${item.image.tablet}`} />
                <img className="other-image" src={`${item.image.desktop}`} alt={product.name} />
              </picture>
              <h5>{item.name}</h5>
              <Link to={`/product${item.slug}`}>
                <button className="button-1">see product</button>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;