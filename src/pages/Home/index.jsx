import React, { useEffect } from 'react'
import Hero from "components/Hero";
import useFetch from 'Hooks/useFetch';
import CardGroupPostCompact from 'components/CardGroupPostCompact';
import CallToAction from 'components/CallToAction';

const Home = () => {
  const { data: dataResources, doFetch: fetchResources } = useFetch();

  useEffect(() => {
    if(dataResources === undefined || dataResources === null){
      fetchResources("resources")
    };
  }, [])

  return (
    <>
      <Hero />
      <CallToAction />
      <main>
        <CardGroupPostCompact />
      </main>
      {/* {dataResources? <h1>Il y a actuellement {dataResources.length} articles chargés sur cette page</h1> : '' } */}
    </>
  )
}

export default Home;
