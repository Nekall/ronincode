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
    
  
    useEffect(() => {

      console.log(techno)

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
            console.log(data)
            setUsers(data)
        }
      })   
    },[])

 
    
      return (
        <div className = "findMentor">
          <div className="date">
          <h1>Trouver un mentor</h1>
            <div>
              <form>
                <input type="text" value={techno} placeholder="Tapez une technologie" onChange={(e) => setTechno(e.target.value)}></input>
                <button> Chercher</button>
              </form>

            </div>
            
            <ul className = "mentors">
            {users.map((user => {
              
              if (user.is_mentor == true || user.technologies !== null){
                return(
                  <li key={user.id} className="mentor_card">
                <div className="mentor-container">
                  <img className="avatar_mentor" src={avatar} alt="" />
                  <div className="mentor_text">
                    <div className="day">{user.username}</div>
                   {user.technologies.map((techno) => (
                     <div key={techno.id} className="day"> 
                        <h3>{techno.name} </h3>
                      </div>
                  ))}
                  </div>
                </div>
                <div className="txt-container">
                  <div className="title"> </div>
                  <div className="buttons">
                    <BtnLangage />
                  </div>
                </div>
                <div className="editButton">
                <Link to={`/profile/${user.id}`}>Profil</Link>
                </div>
              </li>
            )}}))}
            </ul>
            
          </div>
        </div>
    );
}

export default IndexMentor