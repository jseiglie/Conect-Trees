import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

const AddColab = (props) => {
  const { authState } = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const [modified, setModified] = useState(false);
  const navigate = useNavigate();
  // Messages
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";

  // Error Component
  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

useEffect(()=>{
  if (!authState) navigate("/admin")
})

  //validation
  const validateNombre = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 50) {
      error = maxLength;
    }
    return error;
  };

  const validateSlug = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 50) {
      error = maxLength;
    }
    return error;
  };

  const validateUrl = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const validateInfo = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 200) {
      error = maxLength;
    }
    return error;
  };

  const validateLogo = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const handleClose = () => setModalShow(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const send = await axios.post(
        "http://localhost:3001/digitalhub/colaboradores",
        values,
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )(console.log(JSON.stringify(values, null, 2)));
      setSubmitting(false);
      modified === true ? setModified(false) : setModified(true);
      alert("Agregado correctamente");
      setModalShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      show={modalShow}
      onClose={handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Añadir colaboradores
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Formik
            initialValues={{
              nombre: "",
              slug: "",
              url: "",
              info: "",
              logo: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isValidating }) => (
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <Form>
                      <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <Field
                          id="nombre"
                          type="text"
                          name="nombre"
                          className="form-control"
                          placeholder="Nombre"
                          validate={validateNombre}
                        />
                        {errors.nombre &&
                          touched.nombre &&
                          errorMessage(errors.nombre)}
                      </div>
                      <div className="form-group">
                        <label htmlFor="slug">Slug</label>
                        <Field
                          id="slug"
                          type="text"
                          name="slug"
                          className="form-control"
                          placeholder="Slug"
                          validate={validateSlug}
                        />
                        {errors.nombre &&
                          touched.nombre &&
                          errorMessage(errors.nombre)}
                      </div>
                      <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <Field
                          id="url"
                          type="text"
                          name="url"
                          className="form-control"
                          placeholder="url"
                          validate={validateUrl}
                        />
                        {errors.url && touched.url && errorMessage(errors.url)}
                      </div>
                      <div className="form-group">
                        <label htmlFor="info">Info</label>
                        <Field
                          id="info"
                          component="textarea"
                          rows="3"
                          name="info"
                          className="form-control"
                          placeholder="Información"
                          validate={validateInfo}
                        />
                        {errors.info &&
                          touched.info &&
                          errorMessage(errors.info)}
                      </div>
                      <div className="form-group">
                        <label htmlFor="logo">Logo</label>
                        <Field
                          id="logo"
                          type="text"
                          name="logo"
                          className="form-control"
                          placeholder="Logo"
                          validate={validateLogo}
                        />
                        {errors.logo &&
                          touched.logo &&
                          errorMessage(errors.logo)}
                      </div>
                      <button className="btn btn-primary dashboard_btn__add" type="submit">Agregar</button>
                      {/* <button type="button" onClick={props.onHide}>
                        Close
                      </button> */}
                    </Form>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

//AddColab.propTypes = {}

export default AddColab;
