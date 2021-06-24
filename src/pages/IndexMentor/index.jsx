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
    
    
    const url = "https://ronincode.herokuapp.com/users"
    const rdvFetch = () => {

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
    }

      useEffect(() => {
        rdvFetch();
      }, []
      )
  

      return (
        <div className = "NewRDV">
          <div className="date">
          <h1>Trouver un mentor</h1>
            <div>
              <form>
                <input type="text" value={techno} placeholder="Tapez une technologie" onChange={(e) => setTechno(e.target.value)}></input>
                <button> Chercher</button>
              </form>

            </div>
            <ul>
            {users.map((user => (
              <li className="mentor_card">
                <div className="mentor-container">
                  <img className="avatar_mentor" src={avatar} alt="" />
                  <div className="mentor_text">
                    <div className="day">{user.username}</div>
                    <div className="day">{user.email}</div>
                  </div>
                </div>
                <div className="txt-container">
                  <div className="title"> </div>
                  <div className="buttons">
                    <BtnLangage />
                  </div>
                </div>
                <div className="editButton">
                
                  <button href="https://ronincode.herokuapp.com/users/{user.email}">Profil</button>
                  <button>Contacter</button>
                </div>
              </li>
            )))}
            </ul>
          </div>
        </div>
    );
}

export default IndexMentor