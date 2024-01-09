import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      Footer
      <section className='top'>
        <div className='column'>
          <h3>Categories</h3>
          <ul className='footer-block'>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>
              <a href='#'>Men</a>
            </li>
            <li>
              <a href='#'>Shoes</a>
            </li>
            <li>
              <a href='#'>Accessories</a>
            </li>
            <li>
              <a href='#'>New Arrivals</a>
            </li>
          </ul>
        </div>
        <div className='column'>
          <h3>Categories</h3>
          <ul className='footer-block'>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>
              <a href='#'>Men</a>
            </li>
            <li>
              <a href='#'>Shoes</a>
            </li>
            <li>
              <a href='#'>Accessories</a>
            </li>
            <li>
              <a href='#'>New Arrivals</a>
            </li>
          </ul>
        </div>
      </section>
      <section className='bottom'></section>
    </footer>
  );
};

export default Footer;
