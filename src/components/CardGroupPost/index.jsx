import React, {useState, useEffect} from 'react';
import CardPost from 'components/CardPost';
import { v4 as uuidv4 } from 'uuid';


const CardGroupPost = () => {

  const [articles, setArticles] = useState([])


  useEffect(() => {

    fetch(`https://ronincode.herokuapp.com/resources`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      setArticles(data.reverse());

      })
    .catch(err => console.error(err));

  }, [])


  return(

    <div className="card-post-container">
      {articles && articles.map((article) =>
        <div key={uuidv4()}>
          <CardPost data={article}/>
        </div>
      )}
    </div>
  )

};

export default CardGroupPost;
