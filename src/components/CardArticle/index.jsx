import React from 'react';
import BtnLangage from "components/BtnLangage";
import img_article from 'assets/images/background-retrowave-web.jpg';


const CardArticle = () => {
  return (
    <>
      <div className="card-article">
        <a href="/" className="card-article-img-container">
          <img src={img_article} alt="Ligne de code sur un écran" />
        </a>
        <div className="card-article-txt-container">
          <h2>Le titre est juste ici</h2>
          <a className="author" href="/">
            <h3>Black Widow</h3>
          </a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et molestiae tenetur dolor quibusdam sit nam, minima harum totam iste perspiciatis nostrum necessitatibus deserunt cum tempora magni! Delectus velit explicabo sapiente!</p>
          <BtnLangage />
        </div>
      </div>
      
      <div className="card-article">
        <a href="/" className="card-article-img-container">
          <img src={img_article} alt="Ligne de code sur un écran" />
        </a>
        <div className="card-article-txt-container">
          <h2>Le titre est juste ici</h2>
          <a className="author" href="/">
            <h3>Black Widow</h3>
          </a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et molestiae tenetur dolor quibusdam sit nam, minima harum totam iste perspiciatis nostrum necessitatibus deserunt cum tempora magni! Delectus velit explicabo sapiente!</p>
          <BtnLangage />
        </div>
      </div>
    </>
  );
};

export default CardArticle;