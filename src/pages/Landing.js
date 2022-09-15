import React from 'react';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';

import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </nav>
    </Wrapper>
  );
};

export default Landing;
