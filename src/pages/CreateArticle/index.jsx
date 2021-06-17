import React, { useState} from 'react'
import './style.css'

const CreateArticle = () => { 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [lead, setLead] = useState('')

    const inputData = {
      resources: {
        title: title,
        lead: lead,
        content: content,
      }
    }



    const url = "http://localhost:3000/resources"

    const handleFetch = () => {

      fetch(url, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(inputData)
      })
      .then((response) => {
        console.log(response)
      })

    }
    
    return (
      <div className = "NewArticle">
        <h1>Ajouter un Article</h1>
        <form className="form" onSubmit={handleFetch}>
          <div className="FirstColumn">
            <input type="text" value={title} placeholder="Titre de l'article" onChange={(e) => setTitle(e.target.value)}></input>
            <textarea className="ArticleLead" placeholder="Introduction" type="textarea" value={lead} onChange={(e) => setLead(e.target.value)}></textarea>
            <textarea className="ArticleContent" placeholder="Contenu de l'article" type="textarea" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button>Valider</button>
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