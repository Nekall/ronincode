import audiotape from '../../assets/images/404-audiotape.png';

const Error = () => {

  return(
    <div className="error-page" >
      <span></span>
      <span>
        <h1 className="error-section error">Page non trouvée</h1>
        <img className="audiotape floating" src={audiotape} alt="Dessin cassette audio cassée"/>
        <p className="error-section error-sentence" >Ca va être beaucoup plus difficile de la rembobiner maintenant...Même avec un stylo bille.</p>
      </span>
      <span></span>
    </div>
  )
}

export default Error;
