import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import CardGroupPostCompact from "components/CardGroupPostCompact/index.jsx";

const Blog = () => {
  const logged = useSelector(state => state.logReducer.logged);
  return(
    <>
      <CardGroupPostCompact />
    </>
  )
}

export default Blog;
