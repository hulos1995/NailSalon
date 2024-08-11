import Hero from '../../Hero/Hero';
import './Home.scss';
import Service from '../../Service/Service';
const App: React.FC = () => {
  return (
    <div className='app'>
      <Hero />
      <Service />
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
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47237.46792954953!2d-83.0876791!3d42.2712278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d25649ea2bf%3A0x8037139bea02d306!2sRegal%20Nails%2C%20Salon%20%26%20Spa!5e0!3m2!1sen!2sca!4v1723417281164!5m2!1sen!2sca'
          width='1920'
          height='400'
          style={{ border: 0 }}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <footer className='footer'>
        <p className='footer__text'>© 2024 Nail Salon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
