import React from 'react';
import { Link } from 'react-router-dom';

const BtnTechno = (props) => {

  return (
    <Link to="/" className="btn-techno">{props.techno}</Link>
  );
};

export default BtnTechno;
