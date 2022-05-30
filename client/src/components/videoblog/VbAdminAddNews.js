import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";

const VbAdminAddNews = () => {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authState) navigate("/admin"); // eslint-disable-next-line
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

  const validateDestacada = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 1) {
      error = maxLength;
    }
    return error;
  };

  const handleClose = () => {
    navigate("/admin/dashboard");
  };


  const validateCategoria = (value) =>{
    let error;
    if (!value) {
      error = required;
    } else if (value === "") {
      error = maxLength;
    }
    return error;
  };

  return (
    <>
      <Formik
        initialValues={{
          id_categoria: "",
          fecha: "",
          hora: "",
          user: "",
          titulo: "",
          intro: "",
          seo: "",
          descripcion: "",
          ultima_modificacion: "",
          user_modificacion: "",
          ruta_img: "",
          alt_img: "",
          video: "",
          tipo_video: "",
          codigo_video: "",
          visitas: 0,
          publicar: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          axios.post("http://localhost:3001/videoblog/admin/noticias", values, {
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
                  <label htmlFor="user">Usuario que crea la noticia</label>
                  <Field
                    id="user"
                    className="form-control"
                    type="text"
                    placeholder="Usuario que crea la noticia"
                    name="user"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="id_categoria">Categoria</label>
                  <Field
                    id="id_categoria"
                    className="form-control"
                    name="id_categoria"
                    
                    as="select"
                    validate={validateCategoria}
                  >
                    <option>Seleccionar</option>
                    <option value="1">Teledetección</option>
                    <option value="2">Soluciones Integrales</option>
                    <option value="3">Riego</option>
                    <option value="4">Protección Vegetal</option>
                    <option value="5">Nutrición</option>
                    <option value="6">Maquinaria</option>
                    <option value="7">Sensorización</option>
                    <option value="8">Big Data</option>
                  </Field>
                  {errors.publicar &&
                    touched.publicar &&
                    errorMessage(errors.publicar)}
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
                  <label htmlFor="seo">Titulo SEO</label>
                  <Field
                    id="seo"
                    type="text"
                    name="seo"
                    className="form-control"
                    placeholder="Titulo SEO"
                    validate={validateTitulo_seo}
                  />
                  {errors.titulo_seo &&
                    touched.titulo_seo &&
                    errorMessage(errors.titulo_seo)}
                </div>
                <div className="form-group">
                  <label htmlFor="tipo_video">Tipo de video</label>
                  <Field
                    id="tipo_video"
                    className="form-control"
                    as="select"
                    name="tipo_video"
                    validate={validateTipo}
                  >
                    <option>Seleccionar</option>
                    <option value="youtube">youtube</option>
                    <option value="vimeo">vimeo</option>
                  </Field>

                  {errors.tipo && touched.tipo && errorMessage(errors.tipo)}
                </div>
                <div className="form-group">
                  <label htmlFor="codigo_video">Codigo del video</label>
                  <Field
                    id="codigo_video"
                    className="form-control"
                    placeholder="codigo"
                    name="codigo_video"
                    validate={validateCodigo}
                  />
                  {errors.codigo &&
                    touched.codigo &&
                    errorMessage(errors.codigo)}
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
                  <label htmlFor="destacada">Destacada</label>
                  <Field
                    id="destacada"
                    className="form-control"
                    name="destacada"
                    as="select"
                    validate={validateDestacada}
                  >
                    <option>Seleccionar</option>
                    <option value="1">SI</option>
                    <option value="0">NO</option>
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
    </>
  );
};

export default VbAdminAddNews;
