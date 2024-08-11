import './Service.scss';
import React from 'react';
import manicure from '../../assets/images/manicure.jpg';
import pedicure from '../../assets/images/pedicure.jpg';
import nailart from '../../assets/images/art.jpg';

const Service: React.FC = () => {
  return (
    <>
      <section className='services' id='services'>
        <h2 className='services__title'>Our Services</h2>
        <div className='services__list'>
          <div className='services__item'>
            <img
              src={manicure}
              alt='Manicure logo'
              className='services__item-image'
            />
            <h3 className='services__item-title'>Manicure</h3>
            <p className='services__item-description'>
              Description of manicure service.
            </p>
          </div>
          <div className='services__item'>
            <img
              src={pedicure}
              alt='Pedicure logo'
              className='services__item-image'
            />
            <h3 className='services__item-title'>Pedicure</h3>
            <p className='services__item-description'>
              Description of pedicure service.
            </p>
          </div>
          <div className='services__item'>
            <img
              src={nailart}
              alt='Nail Art logo'
              className='services__item-image-art'
            />
            <h3 className='services__item-title'>Nail Art</h3>
            <p className='services__item-description'>
              Description of nail art service.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
