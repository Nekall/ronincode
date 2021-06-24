import React from 'react';
import Mentor from 'components/Mentor';
import BtnTechno from 'components/BtnTechno';

const MentorList = () => {
  return (
    <ul className="mentor-list">
      <div className="title">
        <h2>Mentors</h2>
        <BtnTechno />
      </div>
      <Mentor />
    </ul>
  );
};

export default MentorList;