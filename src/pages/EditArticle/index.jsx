import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie';
import './style.css'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';



const EditArticle = () => { 

    
    const token = Cookies.get('token')
    const { articleSlug } = useParams();
    const [technologies, setTechnologies] = useState([])
    const [articleInfo, setarticleInfo] = useState([])
    // const [joindata, setJoindata] = useState()
    const history = useHistory()

    
    const [data, setData] = useState({
      
        title: articleInfo.title,
        lead: articleInfo.lead,
        content: articleInfo.content,
        
    });
    

    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value, 

      })
      
    };

    const url = `https://ronincode.herokuapp.com/resources/${articleSlug}`

    const handleFetch = (e) => {
      e.preventDefault();

      fetch(url, {
        method : "PUT",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify(data)
      })
      .then((response) => response.json())
      .then(data => { setarticleInfo(data)
          history.push(`/blog/${articleSlug}`)
        })
        
      } 


      const updateFetch = (e) => {
        e.preventDefault();
        let techno1 = document.getElementById("techno1").value
        let joindata = {
          resource_id: parseInt(articleSlug),
          technology_id: parseInt(techno1),
        }
        console.log(`joindata2`, joindata)
        console.log(`techno1`, techno1)
        fetch(`https://ronincode.herokuapp.com/resources_technologies/`, {
          method : "POST",
          headers : {
            'Authorization': token,
            "Content-Type" : "application/json",
          },
          body : JSON.stringify(joindata)
        })
        .then((response) => response.json())
        } 

        const makeitFetch = (data) => {
          handleFetch(data);
          updateFetch(data);
        }
    
      const technoFetch = () => {
  
        fetch(`https://ronincode.herokuapp.com/technologies/`, {
          method : "GET",
          headers : {
            "Content-Type" : "application/json",
          },
          
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setTechnologies(data)
        })
  
      }
  
        useEffect(() => {
          technoFetch();
      }, [])

     
        
    return (
      <div className = "editArticle">
        <h1>Modifier l'Article</h1>
        <form className="form" onSubmit={makeitFetch}>
          <div className="ContentArticle" >
            <div className="Column1">
              <input type="text" className="ArticleTitle" name="title" placeholder="Titre de l'article" onFocus={(e) => e.target.placeholder = ''}  onBlur={(e) => e.target.placeholder = "Titre de l'article"} onChange={handleChange}></input>
              <textarea className="ArticleLead" name="lead" placeholder="Introduction" type="textarea" onChange={handleChange}></textarea>
              <textarea className="ArticleContent" name="content" placeholder="Contenu de l'article" type="textarea"  onChange={handleChange}></textarea>
              <input type="submit" value="modifier"/>
            </div>
            <div className="Column2">
              <div className="Technologies">
                <h2>Technologies</h2>
                  <select name="techno" id="techno1">
                    {technologies && technologies.map(({name, id}, index) =>
                      
                      <option key={Math.random()} value ={id}>{name}</option>
                    
                    )}
                   
                  </select> 
                  
              </div>
            </div>
          </div> 
        </form>
      </div>
  );
}

export default EditArticle