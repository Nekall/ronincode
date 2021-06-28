import React, { useState, useEffect } from 'react'
// import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import './style.css'

const IndexMentor = () => { 
    // const token = Cookies.get('token')
    const [users, setUsers] = useState([]);
    // const [techno, setTechno] = useState('');
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
      if(e.target.value === ""){
        setUsers(saveUsers)
      } else {
        let arrFinal = [];
        console.log(e.target.value)
        users.forEach((user) => {
          if(user.username.toLowerCase().includes(e.target.value.toLowerCase())){
            arrFinal.push(user);
            console.log(user)
          } else {
            user.technologies.map((tech) => {
              if(tech.name.toLowerCase().includes(e.target.value.toLowerCase())){
                arrFinal.push(user);
                console.log(user)
              }})
            }
          })
          setUsers([...new Set(arrFinal)])
        }
    }

    
      return (
        <div className = "findMentor">
          <div className="date">
            <div className="headerMentor">
              <h1>Cherche un Mentor ou une techno</h1>
                <div className="realForm">
                  <input type="text" placeholder="Tapez une technologie ou un Mentor" onChange={searchTechnology}></input>
                </div>
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
                </div>
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