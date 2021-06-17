import React, { useState } from 'react';

const Post = () => {
  const [title, setTitle] = useState('')

  return (
      <div>
        <input value={title} placeholder="Titre de l'article" onChange={(e) => setTitle(e.target.value)}></input>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <input type="radio" id="male" name="gender" value="male"><label for="male">Male</label></input>
      </div>
  );
};

export default Post;