import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, increaseQuantity, decreaseQuantity, CartItem, setCartItems } from '../../Store/CartSlice';
import './CardModal.css';
import cartIcon from '../../assets/shared/desktop/icon-cart.svg';
import { RootState } from '../../Store/Store';
import { Link } from 'react-router-dom';

const CardModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      dispatch(setCartItems(JSON.parse(savedCartItems)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const openModal = () => {
    document.body.classList.add('no-scroll');
    setIsOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove('no-scroll');
    setIsOpen(false);
  };

  const removeLastWord = (str: string) => {
    const words = str.split(' ');
    words.pop();
    return words.join(' ');
  };

  const formatNumber = (number: number) => {
    return number.toLocaleString();
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div>
      <button className='cart-icon' onClick={openModal}><img src={cartIcon} alt="cart" /></button>
      <Modal
        className='cart-modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Cart Modal"
      >
        <div className='modal-content'>
          {cartItems.length < 1 ? (
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <h5>Please select the items</h5>
              <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.684-.694.69.69 0 00-.684-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#000" fill-rule="nonzero" /></svg>
            </div>
          ) : (
            <>
              <div className="cart-header">
                <h5>CART ({cartItems.length})</h5>
                <button className="cart-remove" onClick={() => dispatch(clearCart())}>Remove all</button>
              </div>
              <div className="cart-items">
                {cartItems.map((item: CartItem) => (
                  <div key={item.id} className="cart-container">
                    <div className="cart-item">
                      <div className="cart-description">
                        <img className='cart-image' src={`${item.image}`} alt="image" />
                        <div className="cart-name-price">
                          <span className='cart-product-name'>{removeLastWord(item.name)}</span>
                          <span className='cart-product-price'>${formatNumber(item.price)}</span>
                        </div>
                      </div>
                      <div className="counter-card">
                        <button className='plus-minus-card' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                        <span className='quantity-span-card'>{item.quantity}</span>
                        <button className='plus-minus-card' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <span className='total-label'>Total: </span>
                <span className='total-price'>${formatNumber(totalPrice)}</span>
              </div>
              <div className="checkout-cart-button">
                <Link to={'/checkout'}>
                  <button className='button-cart' onClick={closeModal}>checkout</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
