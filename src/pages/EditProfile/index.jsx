import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const EditProfile = () => {
  const id = Cookies.get('id');
  const [userinfo, setUserinfo] = useState('');

  const [dataUser, setDataUser] = useState({
    user: {
      username: userinfo.username,
      email: userinfo.email,
      firstname: userinfo.firstname,
      lastname: userinfo.lastname,
      password: userinfo.password,
    }
  });

  const {data: sync, doFetch: updateUser } = useFetch('PUT', dataUser);

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      user: {
        [e.target.name]: e.target.value
      }
    });
  };

  const updateFetch = (e) => {
    e.preventDefault();
    updateUser(`users/${id}`);
    e.target.reset();
  };

  useEffect(() => {
    fetch(`https://ronincode.herokuapp.com/users/${id}`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      setUserinfo(dataUser);
      })
    .catch(err => console.error(err));
    // eslint-disable-next-line
  }, [sync]);

  return (
    <div className="editProfile">
      <h1>Edit Profile</h1>
      {userinfo ?
        <div>
          <form onSubmit={updateFetch}>
            <label htmlFor="username"> Pseudo :
              <input type="text" name="username" placeholder={userinfo.username} onChange={handleChange}/>
            </label>
            <label htmlFor="email"> Email:
              <input type="text" name="email" placeholder={userinfo.email} onChange={handleChange}/>
            </label>
            <label htmlFor="firstname"> Prénom :
              <input type="text" name="firstname" placeholder={userinfo.firstname} onChange={handleChange}/>
            </label>
            <label htmlFor="lastname"> Nom :
              <input type="text" name="lastname" placeholder={userinfo.lastname} onChange={handleChange}/>
            </label>
            <label htmlFor="password"> Mot de passe :
              <input type="text" name="password" minLength="8" placeholder={"8 caractére minimum"} onChange={handleChange}/>
            </label>
            <input type="submit" className="btn-message" value="Mettre à jour mes informations" />
          </form>
          <Link to={`/profile/${id}`} className="btn-message">Mon profile</Link>
        </div>
        :
        <Skeleton count={2}/>
      }
    </div>
  );
};

export default EditProfile;
