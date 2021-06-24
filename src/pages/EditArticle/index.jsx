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
   
    const history = useHistory()

    
    const [data, setData] = useState({
      
        title: articleInfo.title,
        lead: articleInfo.lead,
        content: articleInfo.content,
        technologies: {
          resource_id: articleSlug,
          technology_id: articleInfo.technology_id,
        }
    });
    
    const handleChange = (e) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setData({
        ...data,
        [e.target.name]: value, 

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
        console.log(`data`, data)
        fetch(`https://ronincode.herokuapp.com/resources_technologies/`, {
          method : "POST",
          headers : {
            'Authorization': `Bearer ${token}`,
            "Content-Type" : "application/json",
          },
          body : JSON.stringify(data)
         
        })
        .then((response) => response.json())
        .then(data => { setarticleInfo(data)})
          console.log(`data`, data)
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

      const [checkedState, setCheckedState] = useState(
        new Array(technologies.length).fill(false)
      );
      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        console.log(`object`, updatedCheckedState)

      }
        
    return (
      <div className = "editArticle">
        <h1>Modifier l'Article</h1>
        <form className="form" onSubmit={makeitFetch}>
          <div className="ContentArticle" >
            <div className="Column1">
              <input type="text" className="ArticleTitle" name="title" placeholder="Titre de l'article" onFocus={(e) => e.target.placeholder = ''}  onBlur={(e) => e.target.placeholder = "Titre de l'article"} onChange={handleChange}></input>
              <textarea className="ArticleLead" name="lead" placeholder="Introduction" type="textarea" onChange={handleChange}></textarea>
              <textarea className="ArticleContent" name="content" placeholder="Contenu de l'article" type="textarea"  onChange={handleChange}></textarea>
              <button>Modifier</button>
            </div>
            <div className="Column2">
              <div className="Technologies">
                <h2>Technologies</h2>
                <div className="Options">{technologies && technologies.map(({name, id}, index) =>
                  <div className="Option">
                    <p key={index}>{name} </p>
                    <input type="checkbox" id={id}  name="technology_id" value={id} checked={checkedState[index]}  onChange={() => handleOnChange(index)}></input>
                  </div>
                  
                )}
                  
                </div>
              </div>
            </div>
          </div> 
        </form>
      </div>
  );
}

export default EditArticle