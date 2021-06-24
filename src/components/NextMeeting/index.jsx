import React from 'react';
import BtnLangage from 'components/BtnLangage';
import { Link } from 'react-router-dom';

const NextMeeting = () => {
  return (
    <>
      <div className="next-meeting">
        <h2 className="card-title">Prochain rendez-vous</h2>
        <div className="date-container">
          <div className="date">
            <div className="day">20</div>
            <div className="month">septembre</div>
          </div>
          <div className="txt-container">
            <div className="title">14h30 : Mentorat - Mentor : <Link to="/">Day101</Link></div>
            <BtnLangage />
          </div>
        </div>
      </div>
    </>
  );
};

export default NextMeeting;