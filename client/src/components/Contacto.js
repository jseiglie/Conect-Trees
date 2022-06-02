import React from "react";
import ContactForm from "./ContactForm";

const Contacto = (props) => {
  return (
    <section id="contacto">
      <div className="contacto">
        <h2 className="section_name color-white">Contacta Con Nosotros</h2>
        <ContactForm />
      </div>
    </section>
  );
};
export default Contacto;
