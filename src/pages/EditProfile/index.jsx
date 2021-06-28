import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Cookies from 'js-cookie';

const EditProfile = () => {
  const [userinfo, setUserinfo] = useState('');
  const cookie = Cookies.get("token");
  const history = useHistory();
  const id = Cookies.get('id');

  const [dataUser, setDataUser] = useState({
      username: userinfo.username,
      email: userinfo.email,
      firstname: userinfo.firstname,
      lastname: userinfo.lastname,
      password: userinfo.password,
  });

  const updateUser = (payload) => {
    fetch(`https://ronincode.herokuapp.com/users/${id}`,{
      method:'PUT',
      headers: {
        Authorization: `${cookie}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({user: payload}),
    })
    .then((response) => response.json())
    .catch(err => console.error(err));
  };

  const handleChanges = (e) => {
    e.preventDefault();
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value
    });
  };

  const updateFetch = (e) => {
    updateUser(dataUser);
    history.push(`/profile/${id}`);
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
  }, []);

  return (
    <div className="editProfile">
      <h1>Editer le profil</h1>
      {userinfo ?
        <div>
          <form onSubmit={updateFetch}>
            <label htmlFor="username"> Pseudo :
              <input type="text" name="username" placeholder={userinfo.username} onChange={handleChanges}/>
            </label>
            <label htmlFor="email"> Email:
              <input type="text" name="email" placeholder={userinfo.email} onChange={handleChanges}/>
            </label>
            <label htmlFor="firstname"> Prénom :
              <input type="text" name="firstname" placeholder={userinfo.firstname} onChange={handleChanges}/>
            </label>
            <label htmlFor="lastname"> Nom :
              <input type="text" name="lastname" placeholder={userinfo.lastname} onChange={handleChanges}/>
            </label>
            <label htmlFor="password"> Mot de passe :
              <input type="text" name="password" minLength="8" placeholder={"8 caractères minimum"} onChange={handleChanges}/>
            </label>
            <input type="submit" className="btn-update" value="Mettre à jour" />
            <Link to={`/profile/${id}`} className="btn-update btn-return">Annuler</Link>
          </form>
        </div>
        :
        <Skeleton count={2}/>
      }
    </div>
  );
};

export default EditProfile;
