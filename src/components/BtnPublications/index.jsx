import React from 'react';
import { Link } from 'react-router-dom';
import publications from 'assets/images/icons/publications.svg';

const BtnPublications = () => {
  return (
    <li className="nav-item middle-bar">
      <Link to="/articles" className="icon-button">
        <img src={publications} alt="Publications" />
      </Link>
      <a href="/">Publications</a>
    </li>
  );
};

export default BtnPublications;