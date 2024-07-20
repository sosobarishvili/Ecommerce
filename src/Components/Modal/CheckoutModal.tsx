import './CheckoutModal.css'
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import React from "react";
import Modal from 'react-modal';
import checkoutIcon from '../../assets/checkout/icon-order-confirmation.svg'
import { Link } from 'react-router-dom';

export type Props = {
  grandTotal: number;
  isOpen: boolean;
  onRequestClose: () => void;
};

const CheckoutModal = ({ grandTotal, isOpen, onRequestClose }: Props) => {
  const [showAllItems, setShowAllItems] = React.useState(false);
  const CheckoutItems = useSelector((state: RootState) => state.cart.items);

  const toggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  const removeLastWord = (str: string) => {
    const words = str.split(' ');
    words.pop();
    return words.join(' ');
  };

  const formatNumber = (number: number) => {
    return number.toLocaleString();
  };

  return (
    <Modal
      className='checkout-modal'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Checkout Modal"
    >
      <>
        <img className='checkoutIcon' src={checkoutIcon} alt="icon" />
        <div className="confirmation-texts">
          <h3 className='confirmation-h3'>THANK YOU <br /> FOR YOUR ORDER</h3>
          <p className="receive-email">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="confirmation-statement">
          <div className="confirmation-info">
            {CheckoutItems.slice(0, 1).map((item) => (
              <div className="checkout-container-main" key={item.id}>
                <div className="checkout-products checkout-products-modal">
                  <div className="checkout-products-right">
                    <img className='checkout-product-image' src={item.image} alt="image" />
                    <div className="checkout-name-price">
                      <span className='checkout-product-name'>{removeLastWord(item.name)}</span>
                      <span className='checkout-product-price'>${formatNumber(item.price)}</span>
                    </div>
                  </div>
                  <div className="checkout-quantity">x{item.quantity}</div>
                </div>
              </div>
            ))}
            {!showAllItems && CheckoutItems.length > 1 && (
              <button className="toggle-items-button" onClick={toggleItems}>
                and {CheckoutItems.length - 1} other item(s)
              </button>
            )}
            {showAllItems && CheckoutItems.slice(1).map((item) => (
              <div className="checkout-container-main" key={item.id}>
                <div className="checkout-products checkout-products-modal">
                  <div className="checkout-products-right confirmation-products">
                    <img className='checkout-product-image' src={item.image} alt="image" />
                    <div className="checkout-name-price">
                      <span className='checkout-product-name'>{removeLastWord(item.name)}</span>
                      <span className='checkout-product-price'>${formatNumber(item.price)}</span>
                    </div>
                  </div>
                  <div className="checkout-quantity">x{item.quantity}</div>
                </div>
              </div>
            ))}
            {showAllItems && (
              <button className="toggle-items-button" onClick={toggleItems}>
                view less
              </button>
            )}
          </div>
          <div className="confirmation-grand-total">
            <span className="grand-total-text">grand total</span>
            <span className="grand-total-number">${formatNumber(grandTotal)}</span>
          </div>
        </div>
        <Link to={'/'}><button className='confirmation-home-button'>back to home</button></Link>
      </>
    </Modal>
  );
}

export default CheckoutModal;