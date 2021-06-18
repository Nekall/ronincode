import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom'

const EditProfile = () => {

  const id = Cookies.get('id')
  const token = Cookies.get('token')
  const [userinfo, setUserinfo] = useState('')
  const history = useHistory();


  const [data, setData] = useState({
    username: userinfo.username,
    email: userinfo.email,
    password: userinfo.password,
    firstname: userinfo.firstname,
    lastname: userinfo.lastname
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    
  };


  const updateFetch = (e) => {
    e.preventDefault();
    
    fetch(`https://ronincode.herokuapp.com/users/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: data})
      })
      .then(response => response.json())
      
       
      // e.target.reset();
      history.push(`/users/${id}`);
  };

 


  const getFetch = () => {
    fetch(`https://ronincode.herokuapp.com/users/${id}`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      setUserinfo(dataUser);
      })
    .catch(err => console.error(err));

  }

  useEffect(() => {
    getFetch();
  }, [])

  return (
    <div>
      <h1>Edit Profile</h1>

      <p>{userinfo.username}</p>
      <p>{userinfo.email}</p>
      <p>{userinfo.firstname}</p>
      <p>{userinfo.lastname}</p>

      <form onSubmit={updateFetch}>
        <label htmlFor="username"> Username :
          <input type="text" name="username"  onChange={handleChange}/>
        </label>
        <label htmlFor="email"> Email:
          <input type="text" name="email"  onChange={handleChange}/>
        </label>
        <label htmlFor="firstname"> Firstname :
          <input type="text" name="firstname"  onChange={handleChange}/>
        </label>
        <label htmlFor="lastname"> Lastname :
          <input type="text" name="lastname"  onChange={handleChange}/>
        </label>
        <label htmlFor="password"> Password :
          <input type="text" name="password"  onChange={handleChange}/>
        </label>
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default EditProfile;
