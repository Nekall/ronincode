import React from 'react';
import { Link } from 'react-router-dom';

const BtnTechno = (props) => {

  return (
    <>
      {props ?
        <Link to="/" className="btn-techno">{props.techno}</Link>
        :
        <Link to="/" className="btn-techno">Pas de language particulier</Link>
      }
    </>
  );
};

export default BtnTechno;
