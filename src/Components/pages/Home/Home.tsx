import './Home.scss';
import React from 'react';
const App: React.FC = () => {
  return (
    <div className='app'>
      <section className='hero' id='home'>
        <div className='hero__content'>
          <h1 className='hero__title'>Welcome to Our Nail Salon</h1>
          <p className='hero__subtitle'>
            Experience the best nail care services
          </p>
          <button className='hero__button'>Book an Appointment</button>
        </div>
      </section>

      <section className='services' id='services'>
        <h2 className='services__title'>Our Services</h2>
        <div className='services__list'>
          <div className='services__item'>
            <img
              src='service1.jpg'
              alt='Service 1'
              className='services__item-image'
            />
            <h3 className='services__item-title'>Manicure</h3>
            <p className='services__item-description'>
              Description of manicure service.
            </p>
          </div>
          <div className='services__item'>
            <img
              src='service2.jpg'
              alt='Service 2'
              className='services__item-image'
            />
            <h3 className='services__item-title'>Pedicure</h3>
            <p className='services__item-description'>
              Description of pedicure service.
            </p>
          </div>
          <div className='services__item'>
            <img
              src='service3.jpg'
              alt='Service 3'
              className='services__item-image'
            />
            <h3 className='services__item-title'>Nail Art</h3>
            <p className='services__item-description'>
              Description of nail art service.
            </p>
          </div>
        </div>
      </section>

      <section className='about' id='about'>
        <h2 className='about__title'>About Us</h2>
        <p className='about__description'>Information about the nail salon.</p>
      </section>

      <section className='contact' id='contact'>
        <h2 className='contact__title'>Contact Us</h2>
        <form className='contact__form'>
          <input
            type='text'
            className='contact__form-input'
            placeholder='Your Name'
          />
          <input
            type='email'
            className='contact__form-input'
            placeholder='Your Email'
          />
          <textarea
            className='contact__form-textarea'
            placeholder='Your Message'
          ></textarea>
          <button type='submit' className='contact__form-button'>
            Send Message
          </button>
        </form>
      </section>

      <footer className='footer'>
        <p className='footer__text'>© 2024 Nail Salon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
