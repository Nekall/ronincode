import React from 'react'
import Hero from "components/Hero";
import { useDispatch } from 'react-redux'
import { FetchWithBody } from 'services/Fetch';
import { useSelector } from "react-redux";
import CardGroupPostCompact from 'components/CardGroupPostCompact';

const Home = () => {
  const dispatch = useDispatch()
  const alldata = useSelector(state => state.fetchReducer.alldata);

  if(alldata === undefined || alldata === null){
    dispatch(FetchWithBody("https://ronincode.herokuapp.com/resources", "get"))
  }


  return (
    <>
      <Hero />
      <CardGroupPostCompact />
      {alldata? <h1>Il y a actuellement {alldata.length} articles chargés sur cette page</h1> : '' }
    </>
  )

}

export default Home;
