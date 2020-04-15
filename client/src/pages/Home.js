import React, { useRef } from 'react';
import HomeHeader from '../components/HomeHeader';
import LatestProject from '../components/LatestProject';
import ContactMe from '../components/ContactMe';
import Suggestion from '../components/Suggestion';
import Footer from '../components/Footer';

const Home = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const contact = useRef(null);
  const scrollToContact = () => scrollToRef(contact);
  
  return (
    <>
      <HomeHeader scrollToContact={ scrollToContact } />
      <LatestProject />
      <ContactMe contact={ contact } />
      <Suggestion />
      <Footer />
    </>
  )
};

export default Home;
