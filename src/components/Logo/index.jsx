import React from 'react';
import brand_logo from 'assets/images/ronincode-logo.png';
import { Link } from 'react-router-dom';

const Logo = () => (

    <Link to="/" className="brand-nav" >
      <img src={brand_logo} alt="Ronin Code" />
    </Link>
);

export default Logo;
