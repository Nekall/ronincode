import React from 'react';
import { Link } from 'react-router-dom';
import tokyo_street from 'assets/images/tokyo-street.jpg';

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="img-container">
        <img src={tokyo_street} alt="Extérieur nuit tokyo" />
      </div>
      <div className="txt-container">
        <h2>Appuie sur START pour&nbsp;commencer&nbsp;!</h2>
        <Link to="/inscription">&gt;START</Link>
      </div>
    </div>
  );
};

export default CallToAction;