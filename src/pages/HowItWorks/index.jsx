import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import img_post from 'assets/images/image-test.png';
import './style.scss'

const HowItWorks = () => {
  const logged = useSelector(state => state.logReducer.logged);

  return(
    <div className="comment">
      <div className="intro">
        <div className="mentor-list-home h1">
          <h1>Ronin Code</h1>
        </div>
        <div className="text">
          <p className="lead-paragraph">RoninCode est une plateforme permettant aux développeurs débutants de se rapprocher de développeurs plus expérimentés qui souhaitent partager leur savoir.</p>
        </div>
          <div className="photo">
              {/* <img  src={img_post} alt="Ligne de code sur un écran" /> */}
          </div>
      </div>
      <div className="para">
      <div className="mentor-list-home h1">
          <h1>Comment ça marche ?</h1>
        </div>
      <div className="text">
          <p className="lead-paragraph">RoninCode devrait être très simple d'utilisation. Voici les étapes à suivre.</p>
        </div>
        <ul>
          <li>
            <div className="date">
              <div className="day"> 1</div>
              <div className="mounthh">Étape</div>
            </div>
            <div className="lead-paragraph">
              Créer ton compte.
            </div>
            <div className="edit">
              {/* <AcceptButton id={rdv.id} rdvFetch={rdvFetch} /> */}
            </div>
          </li>
          <li>
            <div className="date">
              <div className="day"> 2</div>
              <div className="mounthh">Étape</div>
            </div>
            <div className="lead-paragraph">
              Edite ton profil et choisis ton rôle: "Mentor" si tu veux transmettre, "Disciple" si tu veux apprendre.
              Devenir Mentor, c'est maîtriser des languages de programmation. N'oublie pas de les préciser sur ton profil.
            </div>
            <div className="edit">
              {/* <AcceptButton id={rdv.id} rdvFetch={rdvFetch} /> */}
            </div>
          </li>
          <li>
            <div className="date">
              <div className="day"> 3</div>
              <div className="mounthh">Étape</div>
            </div>
            <div className="lead-paragraph">
            <p>- Si tu es disciple, mets toi en relation avec le mentor qui te transmettra la techno recherchée.</p>
            <p>- Si tu es mentor, mets en avant ton profil en publiant des ressources sur notre blog. Tu seras alors contacté par des disciples interessé par ton profil.</p>

            </div>
            <div className="edit">
              {/* <AcceptButton id={rdv.id} rdvFetch={rdvFetch} /> */}
            </div>
          </li>
          <li>
            <div className="date">
              <div className="day"> 4</div>
              <div className="mounthh">Étape</div>
            </div>
            <div className="lead-paragraph">
            <p>- Si tu es mentor, propose des dates de RDV pour collaborer avec tes disciples.</p>
            <p>- Si tu es disciple, accepte les propositions et commence la collaboration.</p>

            </div>
            <div className="edit">
              {/* <AcceptButton id={rdv.id} rdvFetch={rdvFetch} /> */}
            </div>
          </li>
          {logged ?
            ""
            :
            <li>
              <div className="date">
                <div className="day"> 5</div>
                <div className="mounthh">Étape</div>
              </div>
              <div className="lead-paragraph">
                <Link to="/se-connecter"><button>Se connecter</button></Link>
              </div>
            </li>
          }
        </ul>
      </div>
    </div>  
  );
};

export default HowItWorks;

