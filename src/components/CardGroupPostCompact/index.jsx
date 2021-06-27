import React, {useState, useEffect} from 'react';
import CardPostCompact from 'components/CardPostCompact';

const CardGroupPostCompact = () => {

  const [Articles, setArticles] = useState([])

  useEffect(() => {

    fetch(`https://ronincode.herokuapp.com/resources`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      setArticles(data);

      })
    .catch(err => console.error(err));

  }, [])

  return(

    <div className="card-postCompact-container">
      <h1>Les dernières publications</h1>
      <div className="card-group">
        {Articles && Articles.reverse().map((article, index) =>
          <CardPostCompact key={index} data={article}/>
        )}
      </div>
    </div>
  )

};

export default CardGroupPostCompact;
