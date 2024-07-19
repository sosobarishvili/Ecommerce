import { useSelector } from 'react-redux';
import './Summary.css';
import { RootState } from '../../Store/Store';
import CheckoutModal from '../Modal/CheckoutModal';
import { useState } from 'react';

const Summary = () => {
  const checkoutItems = useSelector((state: RootState) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shipping = 50;

  const formatNumber = (number: number) => {
    return number.toLocaleString();
  };

  const calculateTotal = () => {
    return checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const total = calculateTotal();
  const vat = total * 0.2;
  const grandTotal = total + shipping;

  const removeLastWord = (str: string) => {
    const words = str.split(' ');
    words.pop();
    return words.join(' ');
  };

  const handleCheckout = () => {
    const form = document.querySelector('form');
    if (form && form.checkValidity()) {
      setIsModalOpen(true);
      document.body.classList.add('no-scroll');
    } else if (form) {
      form.reportValidity();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className="summary-container">
      <h5>SUMMARY</h5>
      {checkoutItems.map((item) => (
        <div className="checkout-container-main" key={item.id}>
          <div className="checkout-products">
            <div className="checkout-products-right">
              <img className="checkout-product-image" src={item.image} alt="product" />
              <div className="checkout-name-price">
                <span className="checkout-product-name">{removeLastWord(item.name)}</span>
                <span className="checkout-product-price">${formatNumber(item.price)}</span>
              </div>
            </div>
            <div className="checkout-quantity">x{item.quantity}</div>
          </div>
        </div>
      ))}
      <div className="statement">
        <div className="checkout-totals">
          <p className="statement-text">Total</p>
          <p className="statement-price">{formatNumber(total)}</p>
        </div>
        <div className="checkout-totals">
          <p className="statement-text">Shipping</p>
          <p className="statement-price">${shipping}</p>
        </div>
        <div className="checkout-totals">
          <p className="statement-text vat-included">VAT (included)</p>
          <p className="statement-price">${formatNumber(vat)}</p>
        </div>
        <div className="checkout-totals">
          <p className="statement-text statement-grand-total-text">Grand Total</p>
          <p className="statement-price statement-grand-total">${formatNumber(grandTotal)}</p>
        </div>
      </div>
      <button className="summary-button" onClick={handleCheckout}>
        Continue & Pay
      </button>
      <CheckoutModal grandTotal={grandTotal} isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Summary;