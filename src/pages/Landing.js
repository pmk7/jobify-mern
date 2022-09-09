import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span>app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              amet incidunt earum totam neque alias dolore, debitis est quas
              ipsum placeat consequatur nesciunt deleniti quaerat repellat illum
              nam, aliquid ducimus!
            </p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </nav>
    </Wrapper>
  );
};

export default Landing;
