import { useState } from 'react';
import GoBackButton from '../Goback/GoBackButton';
import './Chekout-input.css';
import delivery from '../../assets/checkout/icon-cash-on-delivery.svg';
import Summary from '../Checkout-summary/Summary';

const CheckoutInputs = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    eMoneyNumber: '',
    eMoneyPin: '',
    paymentMethod: 'e-money',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    eMoneyNumber: '',
    eMoneyPin: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateZip = (zip: string) => {
    return /^[0-9]{5}$/.test(zip);
  };

  const validatePhone = (phone: string) => {
    return /^(\+\d{1,3})?[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{1,4}[\s\-]?\d{1,4}[\s\-]?\d{1,4}$/.test(phone);
  };

  const validateEMoneyNumber = (number: string) => {
    return /^[0-9]{9}$/.test(number);
  };

  const validateEMoneyPin = (pin: string) => {
    return /^[0-9]{4}$/.test(pin);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    let error = '';
    if (!value) {
      error = 'Field cannot be empty';
    } else {
      switch (name) {
        case 'email':
          error = validateEmail(value) ? '' : 'Wrong format';
          break;
        case 'zip':
          error = validateZip(value) ? '' : 'Wrong format';
          break;
        case 'phone':
          error = validatePhone(value) ? '' : 'Wrong format';
          break;
        case 'eMoneyNumber':
          error = validateEMoneyNumber(value) ? '' : 'Wrong format';
          break;
        case 'eMoneyPin':
          error = validateEMoneyPin(value) ? '' : 'Wrong format';
          break;
        default:
          break;
      }
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      paymentMethod: e.target.value,
    }));
  };

  return (
    <div className="checkout-page">
      <div className="container checkout-container">
        <GoBackButton />
        <div className="checkout-main">
          <div className="checkout-main-left">
            <h3 className="checkout-h3">CHECKOUT</h3>
            <p className="sub-title checkout-sub-title">Billing Details</p>
            <form>
              <div className="billing-section">
                <div className="inputs-left">
                  <div className="label-input">
                    <div className='checkout-topics-container'>
                      <label className="checkout-labels" htmlFor="name-input">Name</label>
                      {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                    </div>
                    <input
                      className={`checkout-input ${formErrors.name && 'invalid'}`}
                      type="text"
                      required
                      id="name-input"
                      placeholder="Alexei Ward"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="label-input">
                    <div className='checkout-topics-container'>
                      <label className="checkout-labels" htmlFor="phone-input">Phone Number</label>
                      {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
                    </div>
                    <input
                      className={`checkout-input ${formErrors.phone && 'invalid'}`}
                      type="text"
                      required
                      id="phone-input"
                      placeholder="+1 (202) 555-0136"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="billing-right">
                  <div className="label-input">
                    <div className='checkout-topics-container'>
                      <label className={`checkout-labels billing-email ${formErrors.email && 'invalid'}`} htmlFor="email-input">Email Address</label>
                      {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                    </div>
                    <input
                      className={`checkout-input ${formErrors.email && 'invalid'}`}
                      type="email"
                      required
                      id="email-input"
                      placeholder="alexei@mail.com"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="shipping-info-section">
                <p className="sub-title checkout-sub-title">Shipping Info</p>
                <div className="label-input">
                  <div className='checkout-topics-container'>
                    <label className="checkout-labels" htmlFor="address-input">Address</label>
                    {formErrors.address && <p className="error-message">{formErrors.address}</p>}
                  </div>
                  <input
                    className={`checkout-input ${formErrors.address && 'invalid'}`}
                    type="text"
                    required
                    id="address-input"
                    placeholder="1137 Williams Avenue"
                    name="address"
                    value={formState.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="shipping-info-inputs">
                  <div className="inputs-left">
                    <div className="label-input">
                      <div className='checkout-topics-container'>
                        <label className="checkout-labels" htmlFor="zip-input">ZIP Code</label>
                        {formErrors.zip && <p className="error-message">{formErrors.zip}</p>}
                      </div>
                      <input
                        className={`checkout-input ${formErrors.zip && 'invalid'}`}
                        type="text"
                        required
                        id="zip-input"
                        placeholder="10001"
                        name="zip"
                        value={formState.zip}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="label-input">
                      <div className='checkout-topics-container'>
                        <label className="checkout-labels" htmlFor="city-input">City</label>
                        {formErrors.city && <p className="error-message">{formErrors.city}</p>}
                      </div>
                      <input
                        className={`checkout-input ${formErrors.city && 'invalid'}`}
                        type="text"
                        required
                        id="city-input"
                        placeholder="New York"
                        name="city"
                        value={formState.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="inputs-right">
                    <div className="label-input">
                      <div className='checkout-topics-container'>
                        <label className="checkout-labels" htmlFor="country-input">Country</label>
                        {formErrors.country && <p className="error-message">{formErrors.country}</p>}
                      </div>
                      <input
                        className={`checkout-input ${formErrors.country && 'invalid'}`}
                        type="text"
                        required
                        id="country-input"
                        placeholder="United States"
                        name="country"
                        value={formState.country}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-details-section">
                <p className="sub-title checkout-sub-title">Payment Details</p>
                <div className={`payment-method-container ${formState.paymentMethod === 'e-money' ? 'selected' : ''}`}>
                  <p className="checkout-method-p">Payment Method</p>
                  <div className="payment-method-inputs">
                    <label htmlFor="e-money" className="payment-label">
                      <input
                        type="radio"
                        name="payment-method"
                        id="e-money"
                        checked={formState.paymentMethod === 'e-money'}
                        value="e-money"
                        onChange={handlePaymentMethodChange}
                      />
                      e-Money
                    </label>
                    <label htmlFor="cash" className="payment-label">
                      <input
                        type="radio"
                        name="payment-method"
                        id="cash"
                        value="cash"
                        onChange={handlePaymentMethodChange}
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                {formState.paymentMethod === 'e-money' && (
                  <div className="payment-details">
                    <div className="inputs-left-emoney">
                      <div className="label-input">
                        <div className='checkout-topics-container'>
                          <label className="checkout-labels" htmlFor="e-money-number-input">e-Money Number</label>
                          {formErrors.eMoneyNumber && <p className="error-message">{formErrors.eMoneyNumber}</p>}
                        </div>
                        <input
                          className={`checkout-input ${formErrors.eMoneyNumber && 'invalid'}`}
                          type="text"
                          required
                          id="e-money-number-input"
                          placeholder="238521993"
                          name="eMoneyNumber"
                          value={formState.eMoneyNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="billing-right-emoney">
                      <div className="label-input">
                        <div className='checkout-topics-container'>
                          <label className="checkout-labels" htmlFor="e-money-pin-input">e-Money PIN</label>
                          {formErrors.eMoneyPin && <p className="error-message">{formErrors.eMoneyPin}</p>}
                        </div>
                        <input
                          className={`checkout-input ${formErrors.eMoneyPin && 'invalid'}`}
                          type="text"
                          required
                          id="e-money-pin-input"
                          placeholder="6891"
                          name="eMoneyPin"
                          value={formState.eMoneyPin}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {formState.paymentMethod === 'cash' && (
                  <div className="cash-on-delivery-container">
                    <div className="cash-on-delivery-left">
                      <img src={delivery} alt="cash-on-delivery" />
                    </div>
                    <p className="cash-on-delivery-text">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
          <Summary />
        </div>
      </div>
    </div>
  )
}

export default CheckoutInputs;