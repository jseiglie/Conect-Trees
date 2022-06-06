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
import {Cookies, useCookies} from "react-cookie"
import CookieConsent from "react-cookie-consent"

const Home = () => {
//const [cookie, setCookie] = useCookies([])
useEffect(()=>{
<CookieConsent
debug="true"
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
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
