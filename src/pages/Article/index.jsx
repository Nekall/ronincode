const Article = () => {



  const [Articles, setArticles] = useState([])


  useEffect(() => {

    fetch(`http://localhost:3000/resources`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      setArticles(data);

      })
    .catch(err => console.error(err));

  }, [])

  return(
    <div>
      <h1> Articles </h1>
      <div>{Articles.map((article) =>
        <div>
          <p key={article.id}> Title: {article.title} </p>
          <p key={article.id}> Content: {article.content} </p>
          <p key={article.id}> Lead: {article.lead}</p>
          <p key={article.id}> User_id: {article.user_id}</p>
          
        </div>
      
      )}
      </div>
    </div>
  )

}

export default Article;
