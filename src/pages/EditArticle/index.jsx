import React, { useState} from 'react'
import Cookies from 'js-cookie';
import './style.css'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';



const CreateArticle = () => { 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [lead, setLead] = useState('')
    const token = Cookies.get('token')
    const { articleSlug } = useParams();


    const history = useHistory()
    console.log(token)

    const inputData = {
      resource: {
        title: title,
        lead: lead,
        content: content,
      }
    }


    const url = `https://ronincode.herokuapp.com/resources/${articleSlug}`

    const handleFetch = (e) => {
      e.preventDefault();

      console.log("hello")

      fetch(url, {
        method : "PUT",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify(inputData)
      })
      .then((response) => response.json())
      .then(data => {
        if(data === undefined){
          alert("error")
         } else {
            console.log(data.id)
            alert("Article modifié")
            history.push(`/articles/${data.id}`)
          }
        })
      } 

    
    
    return (
      <div className = "NewArticle">
        <h1>Modifier l'Article</h1>
        <form className="form" onSubmit={handleFetch}>
          <div className="FirstColumn">
            <input type="text" value={title} placeholder="Titre de l'article" onChange={(e) => setTitle(e.target.value)}></input>
            <textarea className="ArticleLead" placeholder="Introduction" type="textarea" value={lead} onChange={(e) => setLead(e.target.value)}></textarea>
            <textarea className="ArticleContent" placeholder="Contenu de l'article" type="textarea" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button>Modifier</button>
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
            </div>
          </div>
        </form>
      </div>
  );
}

export default CreateArticle