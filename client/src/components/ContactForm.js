import React, { useState } from "react";
import "../styles/ContactForm.css";
import axios from "axios"

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [emporg, setEmporg] = useState("");
  const [mail, setMail] = useState("");

  const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  const handleContactSend = async (e) => {
    e.preventDefault();
    if (
      name &&
      name.length >= 3 &&
      surname &&
      surname.length >= 3 &&
      emporg &&
      emporg.length >= 3 &&
      mail && 
      mail.match(regexp)
    ) {
      const payload = {
        name: name,
        surname: surname,
        emporg: emporg,
        mail: mail,
      };
      try {
        axios.post("http://localhost:3001/digitalhub/contacto", {payload})
        
      } catch (error) {
        
      } 
      console.log(payload);
    } else {
      return alert(
        "Todos los campos del formulario de contacto son obligatorios"
      );
    }
  };

  return (
    <div className="container gx-0 contact_form_">
      <div className="row contact_form__wrapper ">
        <div className="col-md-10">
          <div className="card contact__card ">
            <div className="card-body contact__card__body ">
              <form className="form-control contact__form ">
                <div className="prueba ">
                  <div className="row from__input__wrapper ">
                    <div className="col-3">
                      <i className="fa fa-user fontAwesome__Position " />
                      Nombre
                    </div>
                    <div className="col-11">
                      <input
                        className="form-control form__input"
                        name="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row from__input__wrapper">
                    <div className="col-3">
                      <i className="fa fa-user fontAwesome__Position " />
                      Apellido
                    </div>
                    <div className="col-11">
                      <input
                        className="form-control form__input"
                        name="surname"
                        type="text"
                        onChange={(e) => setSurname(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row from__input__wrapper">
                    <div className="col-3">
                      <i className="fa fa-building fontAwesome__Position " />
                      Empresa
                    </div>
                    <div className="col-11">
                      <input
                        className="form-control form__input"
                        name="emporg"
                        type="text"
                        onChange={(e) => setEmporg(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row from__input__wrapper">
                    <div className="col-3">
                      <i className="fa fa-envelope fontAwesome__Position" />
                      Correo
                    </div>
                    <div className="col-11">
                      <input
                        className="form-control form__input"
                        id="mailInput"
                        name="mail"
                        type="text"
                        onChange={(e) => {setMail(e.target.value)}}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="btn contact_form__submit__btn"
                    type="submit"
                    onClick={handleContactSend}
                  >
                    ENVIAR
                    <i className="far fa-paper-plane contact_form__submit__ico"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
