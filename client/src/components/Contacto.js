import React from "react";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm";


const Contacto = (props) => {
  return (
    <div className="contacto">
      <h2 className="section_name color-white">Contacta Con Nosotros</h2>
    <ContactForm/>
    </div>
  )
  
};

Contacto.propTypes = {};

export default Contacto;
