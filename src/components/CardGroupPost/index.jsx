import React, {useState, useEffect} from 'react';
import CardPost from 'components/CardPost';



const CardGroupPost = () => {

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

    <div>{Articles && Articles.map((article) =>
      <div className="card-post-container">
        <CardPost data={article}/>
        
      </div>
    )}
    </div>
  )
  
};

export default CardGroupPost;