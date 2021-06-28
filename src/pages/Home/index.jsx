import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import CardGroupPostCompact from 'components/CardGroupPostCompact';
import tokyo from 'assets/images/tokyo-night.jpeg';
import CallToAction from 'components/CallToAction';
import MentorList from 'components/MentorList';
import ModalDate from 'components/ModalDate';
import useFetch from 'Hooks/useFetch';
import Hero from "components/Hero";
import Cookies from 'js-cookie';

const Home = () => {
  const logged = useSelector(state => state.logReducer.logged);
  const { data: dataResources, doFetch: fetchResources } = useFetch();
  const {data: dataAllUser, doFetch: fetchAllUser } = useFetch();
  const {data: dataAppointment, doFetch: fetchAppointment } = useFetch();
  let id_user_profile = Cookies.get('id');

  useEffect(() => {
    if(dataResources === undefined || dataResources === null){
      fetchResources("resources")
    };
    fetchAllUser('users');
    fetchAppointment('appointments');
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {logged ?
      <>
      </>
        :
        <>
          <Hero />
          <CallToAction />
        </>
      }
      <main>
        {logged ?
          <>
            <div className="hero-mini">
              <img src={tokyo} alt="Dolorean à Tokyo" className="hero-background"/>
            </div>
            {dataAppointment && dataAllUser ?
              <ModalDate nameOfClass={"next-meeting"} id_user_profile={id_user_profile} dataAppointment={dataAppointment} dataAllUser={dataAllUser} />
              :
              ""
            }
            <div className="mentor-list-home">
              <h1>Trouvez un mentor</h1>
              <MentorList />
              <MentorList />
              <MentorList />
            </div>
          </>
          :
          <>
          </>
        }
        <CardGroupPostCompact />
      </main>
      {/* {dataResources? <h1>Il y a actuellement {dataResources.length} articles chargés sur cette page</h1> : '' } */}
    </>
  )
}

export default Home;

// articles
// list mentor (plusieurs listes)
