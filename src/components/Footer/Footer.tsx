import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      Footer
      <section className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <ul className='footer-block'>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
            <li></li>
          </ul>
        </div>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
          <span></span>
        </div>
      </section>
      <section className='bottom'></section>
    </footer>
  );
};

export default Footer;
