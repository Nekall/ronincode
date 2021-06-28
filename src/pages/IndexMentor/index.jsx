import React, { useState, useEffect } from 'react'
// import Cookies from 'js-cookie';
import BtnLangage from 'components/BtnTechno';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import './style.css'

const IndexMentor = () => { 
    // const token = Cookies.get('token')
    const [users, setUsers] = useState([]);
    const [techno, setTechno] = useState('');
    const [saveUsers, setSaveUsers] = useState([])
    


    useEffect(() => {
    const url = "https://ronincode.herokuapp.com/users"

      fetch(url, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          // "Authorization": `${token}`
        },
      })
      .then((response) => response.json())
      .then(data => {
        if(data === "undefined"){
          console.log(data)
          alert("error")

         } else {
            setUsers(data)
            setSaveUsers(data)
        }
      })   
    },[])

    
    const searchTechnology = (e) => {
      e.preventDefault();
      if(techno === ""){
        setUsers(saveUsers)
      } else {
        let arrFinal = [];
        console.log(techno)
        users.forEach((user) => {
          user.technologies.forEach((tech) => {
            if(tech.name.toLowerCase() === techno.toLowerCase()){
              arrFinal.push(user);
              console.log(user)
            }})
          })
          setUsers(arrFinal)
        }
    }

    
      return (
        <div className = "findMentor">
          <div className="date">
            <div className="headerMentor">
              <h1>Trouver un mentor</h1>
                <form onSubmit={searchTechnology}>
                  <input type="text" value={techno} placeholder="Tapez une technologie" onChange={(e) => setTechno(e.target.value)}></input>
                  <button>Rechercher</button>
                </form>
            </div>
            <ul className = "mentors">
            {users.map((user => {
              if (user.is_mentor === true || user.technologies.length !== 0){
                return(
                  <li key={user.id} className="mentor_card">
                <div className="mentor-container">
                  <div className="profil">
                    <img className="avatar_mentor" src={avatar} alt="" />
                    <div className="mentor_text"></div>
                    <div className="dayy">{user.username}</div>
                  </div>
                  <div>
                  
                   {user.technologies.map((techno) => (
                     <div key={techno.id} > 
                        <div className="btn-techno">{techno.name} </div>
                      </div>
                  ))}
                  </div>
🇳                </div>
                <div className="txt-container">
                  <div className="title"> </div>
                  <div className="buttons">
                  </div>
                  <Link to={`/profile/${user.id}`}>Voir son Profil</Link>
                </div>
                <div className="editButton">
                </div>
              </li>
            )}}))}
            </ul>
            
          </div>
        </div>
    );
}

export default IndexMentor