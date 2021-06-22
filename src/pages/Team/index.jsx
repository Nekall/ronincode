import React, {useState, useEffect} from 'react';
import img_post from 'assets/images/image-test.png';

const Team = () => {

  return(
    <div className="card-team">
      
      <div className="card-char card-1">
        <div className="up-text">
          <p className="">Kevin</p>
          <p className="">ZUGASTI</p>
          <p className="">Warrior</p>
          <p className="">Lv.23</p>
        </div>
      
        <div className="photo">
            <img  src={img_post} alt="Ligne de code sur un écran" />
        </div>
        
        <div className="down-text">
          <p className=""> HP: 120/120</p>
          <div class="progress">
            <div class="hp"></div>
          </div>
          <p className=""> MP: 0/0</p>
          <div class="progress">
            <div class="rage"></div>
          </div>
        </div>
        <a href="https://github.com/ZugastiKevin" className="git">Github</a>
      </div>

      <div className="card-char card-2">
        <div className="up-text">
          <p className="">Benjamin</p>
          <p className="">ANEZO</p>
          <p className="">Paladin</p>
          <p className="">Lv.23</p>
            
        </div>
      
        <div className="photo">
            <img  src={img_post} alt="Ligne de code sur un écran" />
        </div>
        
        <div className="down-text">
          <p className=""> HP: 100/100</p>
          <div class="progress">
            <div class="hp"></div>
          </div>
          <p className=""> MP: 40/40</p>
          <div class="progress">
            <div class="mp"></div>
          </div>
          <a href="https://github.com/Nekall" className="git">Github</a>
          <a href="https://codepen.io/LilNeka" className="git">Codepen</a>
        </div>
      </div>

      <div className="card-char card-3">
        <div className="up-text">
          <p className="">Day</p>
          <p className="">SY</p>
          <p className="">Wizard</p>
          <p className="">Lv.23</p>
            
        </div>
      
        <div className="photo">
            <img  src={img_post} alt="Ligne de code sur un écran" />
        </div>
        
        <div className="down-text">
          <p className=""> HP: 50/50</p>
          <div class="progress">
            <div class="hp"></div>
          </div>
          <p className=""> MP: 120/120</p>
          <div class="progress">
            <div class="mp"></div>
          </div>
          <a href="https://github.com/Day-101" className="git">Github</a>
        </div>
      </div>

      <div className="card-char card-4">
        <div className="up-text">
          <p className="">Jules</p>
          <p className="">TEXIER</p>
          <p className="">Druide</p>
          <p className="">Lv.23</p>
            
        </div>
      
        <div className="photo">
            <img  src={img_post} alt="Ligne de code sur un écran" />
        </div>
        
        <div className="down-text">
          <p className=""> HP: 60/60</p>
          <div class="progress">
            <div class="hp"></div>
          </div>
          <p className=""> MP: 80/80</p>
          <div class="progress">
            <div class="mp"></div>
          </div>
          <a href="https://github.com/JulesTexier" className="git">Github</a>
        </div>
      </div>

      <div className="card-char card-5">
        <div className="up-text">
          <p className="">Matteo</p>
          <p className="">SIDDI</p>
          <p className="">Rogue</p>
          <p className="">Lv.23</p>
            
        </div>
      
        <div className="photo">
            <img  src={img_post} alt="Ligne de code sur un écran" />
        </div>
        
        <div className="down-text">
          <p className=""> HP: 70/70</p>
          <div class="progress">
            <div class="hp"></div>
          </div>
          <p className=""> MP: 0/0</p>
          <div class="progress">
            <div class="energie"></div>
          </div>
          <a href="https://github.com/MatteoTHP" className="git">Github</a>
        </div>
      </div>

    </div>
  )
};

export default Team;