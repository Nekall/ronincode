import React, { useEffect, useState} from 'react'
import './style.css'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'



const ShowArticle = () => { 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [lead, setLead] = useState('')
    const { articleSlug } = useParams();
    const [article, setArticle] = useState([])
    const history = useHistory()

    const ArticleFetch = () => {
      const url = `https://ronincode.herokuapp.com/resources/${articleSlug}`
      console.log("hello")

      fetch(url, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
        },
        // body : JSON.stringify(inputData)
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setArticle(data)
      })

    }

      useEffect(() => {
        ArticleFetch();
    }, [])

      const goEdit = () => {
        history.push(`/editarticles/${article.id}`)
      }

    if (article !== undefined) {
      return (
        <div className = "Article">
          <div className="ContentArticle" >
            <div className="FirstColumn">
              <h1>{article.title}</h1>
              <h3>{article.lead}</h3>
              <p>{article.content}</p>
            </div>
            <div className="SecondColumn">
              <div className="Technologies">
                <h2>Technologies</h2>
                <div className="Options">
                  <div>
                    <label>JS</label>
                    <input type="radio" id="male" name="gender" value="male"></input>
                  </div>
                  <div>
                    <label>React</label>
                    <input type="radio" id="male" name="gender" value="male"></input>
                  </div>
                  <div>
                    <label>HTML</label>
                    <input type="radio" id="male" name="gender" value="male"></input>
                  </div>
                </div>
                  <button onClick={goEdit}>Modifier l'article</button>
              </div>
            </div>
          </div>
        </div>
  );
} else {
  return (
    <p>
      Annonce introuvable
    </p>
  )
}
}

export default ShowArticle