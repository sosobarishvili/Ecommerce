import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './BurgerMenu.css';
import Card from '../Card/Card';
import Headphone from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import Earphone from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Speaker from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import { useState, useEffect } from 'react';

type BurgerProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  func: () => void;
};

const BurgerMenu = ({ modalIsOpen, closeModal, func }: BurgerProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!modalIsOpen) {
      setIsClosing(false);
    }
  }, [modalIsOpen]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  return (
    <Modal
      className={`burger-modal ${isClosing ? 'burger-modal-close' : ''}`}
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Burger Modal"
      overlayClassName={`burger-overlay ${isClosing ? 'burger-overlay-close' : ''}`}
      shouldCloseOnOverlayClick={true}
    >
      <section className="drop-menu">
        <Link to={'/headphones'}>
          <Card func={func} image={Headphone} alt={'headphone'} product={'HEADPHONES'} />
        </Link>
        <Link to={'/speakers'}>
          <Card func={func} image={Speaker} alt={'speaker'} product={'SPEAKERS'} />
        </Link>
        <Link to={'/earphones'}>
          <Card func={func} image={Earphone} alt={'earphone'} product={'EARPHONES'} />
        </Link>
      </section>
    </Modal>
  );
};

export default BurgerMenu;