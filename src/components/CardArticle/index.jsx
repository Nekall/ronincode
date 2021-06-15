import React from 'react';
import BtnLangage from "components/BtnLangage";

import img_article from 'assets/images/image-test.png';
import avatar from 'assets/images/avatar.jpg';


const CardArticle = () => {
  return (
    <>
      <div className="card-article">
        <BtnLangage />
        <h3><a href="/" className="title-article">Le guide du débutant : quelles différences entre&nbsp;UX/UI ?</a></h3>
        <div className="article-avatar">
          <a href="/" className="article-avatar-img-container">
            <img src={avatar} alt="" />
            <div className="retro-filter"></div>
          </a>
          <h4>Black Widow</h4>
          <span className="date">26/06/2021</span>
        </div>
        <div className="card-article-img-container">
          <a href="/">
            <img src={img_article} alt="Ligne de code sur un écran" />
            <div className="retro-filter"></div>
          </a>
        </div>
        <div className="card-article-txt-container">
          <p className="Lead_paragraph">Vous vous êtes déjà retrouvés face à un site internet avec des milliers d’informations sans trouver réponse à votre question ? À une application mobile qui bugue ? Une interface avec des visuels entrecoupés ?... Ou bien vous vous êtes déjà surpris à rester un bon moment à admirer le design d’une application web ou mobile ? Félicitations, vous avez vécu une expérience utilisateur réussie ! Mais que se cache-t-il derrière cette expérience ? Qu’est-ce que l’UX/UI, précisément ? Nous allons le découvrir à travers cet article !</p>
        </div>
        <a href="/" className="read_more">Lire la suite</a>
      </div>
    </>
  );
};

export default CardArticle;