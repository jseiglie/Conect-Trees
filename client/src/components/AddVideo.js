import React, { useContext, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import "../styles/AddVideo.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

const AddVideo = () => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  // para obtener fecha
  // const timestamp = new Date().getTime();
  // const fecha = new Date(timestamp).toLocaleDateString("es-ES"); // 11/5/2022
  // const hora = new Date(timestamp).toLocaleTimeString("es-ES") //17:17:54

  useEffect(() => {
    if (!authState) navigate("/admin");
  }, []);

  // Messages
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";

  // Error Component
  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const validateTitulo = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };
  const validateTitulo_seo = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };
  const validateTipo = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };
  const validateCodigo = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };
  const validateSeccion = (value) => {
    let error;
    if (!value) {
      error = required;
    }
    return error;
  };
  const validatePublicar = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 2) {
      error = maxLength;
    }
    return error;
  };
  const handleClose = () => {
    navigate("/admin/dashboard");
  };
  return (
    <>
      <AdminHeader />
      <Formik
        initialValues={{
          fecha: "",
          hora: "",
          titulo: "",
          titulo_seo: "",
          tipo: "",
          codigo: "",
          seccion: "",
          visitas: 0,
          publicar: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:3001/digitalhub/addtovideo", values, {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          });
          //   .then(console.log("testing"));
          // console.log(JSON.stringify(values, null, 2));
          alert("Noticia-video agregado correctamente");
          setSubmitting(false);

          navigate("/admin/dashboard");
        }}
      >
        {({ errors, touched, isValidating }) => (
          <div className="container">
            <div className="col-sm-12">
              <div className="row iconXPos">
                <span onClick={handleClose} className="iconX">
                  <i className=" fas fa-xmark"></i>
                </span>
              </div>
              <h3 className="text-center add_edit_title">Añadir video</h3>
            </div>
            <div className="col-sm-12">
              <Form>
                <div className="form-group">
                  <label htmlFor="fecha">Fecha</label>
                  <Field
                    id="fecha"
                    className="form-control"
                    type="date"
                    placeholder="fecha"
                    name="fecha"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hora">Hora</label>
                  <Field
                    id="hora"
                    className="form-control"
                    type="time"
                    placeholder="hora"
                    name="hora"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="titulo">Titulo</label>
                  <Field
                    id="titulo"
                    type="text"
                    name="titulo"
                    className="form-control"
                    placeholder="titulo"
                    validate={validateTitulo}
                  />
                  {errors.titulo &&
                    touched.titulo &&
                    errorMessage(errors.titulo)}
                </div>
                <div className="form-group">
                  <label htmlFor="titulo_seo">Titulo SEO</label>
                  <Field
                    id="titulo_seo"
                    type="text"
                    name="titulo_seo"
                    className="form-control"
                    placeholder="titulo_seo"
                    validate={validateTitulo_seo}
                  />
                  {errors.titulo_seo &&
                    touched.titulo_seo &&
                    errorMessage(errors.titulo_seo)}
                </div>
                <div className="form-group">
                  <label htmlFor="tipo">Tipo de video</label>
                  <Field
                    id="tipo"
                    className="form-control"
                    as="select"
                    name="tipo"
                    validate={validateTipo}
                  >
                    <option>Seleccionar</option>
                    <option value="youtube">youtube</option>
                    <option value="vimeo">vimeo</option>
                  </Field>

                  {errors.tipo && touched.tipo && errorMessage(errors.tipo)}
                </div>
                <div className="form-group">
                  <label htmlFor="codigo">Codigo del video</label>
                  <Field
                    id="codigo"
                    className="form-control"
                    placeholder="codigo"
                    name="codigo"
                    validate={validateCodigo}
                  />
                  {errors.codigo &&
                    touched.codigo &&
                    errorMessage(errors.codigo)}
                </div>
                <div className="form-group">
                  <label htmlFor="seccion">Sección</label>
                  <Field
                    id="seccion"
                    className="form-control"
                    as="select"
                    placeholder="seccion"
                    name="seccion"
                    validate={validateSeccion}
                  >
                    <option>Seleccionar</option>
                    <option value="connectlovers">connectlovers</option>
                    <option value="digitraining">digitraining</option>
                  </Field>
                  {errors.seccion &&
                    touched.seccion &&
                    errorMessage(errors.seccion)}
                </div>

                <div className="form-group">
                  <label htmlFor="publicar">Publicar</label>
                  <Field
                    id="publicar"
                    className="form-control"
                    name="publicar"
                    as="select"
                    validate={validatePublicar}
                  >
                    <option>Seleccionar</option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </Field>
                  {errors.publicar &&
                    touched.publicar &&
                    errorMessage(errors.publicar)}
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary dashboard_btn__add"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
      <AdminFooter />
    </>
  );
};

export default AddVideo;
