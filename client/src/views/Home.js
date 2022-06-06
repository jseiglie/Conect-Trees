import React, { useEffect } from "react";
import { Nosotros } from "../components/nosotros";
import { Navbar } from "../components/NavBar";
import "../styles/home.css";
import { Top } from "../components/Top";
import ConnectLovers from "../components/ConnectLovers";
import Digitalizate from "../components/Digitalizate";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";
import ConnecNews from "../components/ConnecNews";
import DigiTraining from "../components/DigiTraining";


const Home = () => {
//const [cookie, setCookie] = useCookies([])
useEffect(()=>{


})





  return (
    <>
      <main>
        <Navbar />
        <Top />
        <Nosotros />
        <ConnectLovers />
        <Digitalizate />
        <Contacto />
        <ConnecNews />
        <DigiTraining />
        <Footer />
      </main>
    </>
  );
};

export default Home;
