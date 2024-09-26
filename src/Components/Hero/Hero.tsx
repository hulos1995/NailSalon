import './Hero.scss';
const Hero: React.FC = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='hero__content'>
          <h1 className='hero__title'>Welcome to Our Nail Salon</h1>
          <p className='hero__subtitle'>
            Experience the best nail care services
          </p>
          <button className='hero__button'>Book an Appointment</button>
        </div>
      </section>
    </>
  );
};
export default Hero;
