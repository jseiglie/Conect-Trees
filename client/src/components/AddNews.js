import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import MulterTest from "./multer.test";
import usePlaceholder from "react-bootstrap/esm/usePlaceholder";

const AddNews = () => {
  const { authState } = useContext(AuthContext);
  const [ruta_img1, setRuta_img1] = useState("");
  const [ruta_img2, setRuta_img2] = useState("");
  const [ruta_img3, setRuta_img3] = useState("");
  const [ruta, setRuta] = useState("");

  useEffect(() => {
    if (!authState) navigate("/admin");
  }, []);
  const navigate = useNavigate();

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
  const validateUser_creacion = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };
  const validateFecha_creacion = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 12) {
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
  const validateIntro = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 200) {
      error = maxLength;
    }
    return error;
  };

  const validateContenido = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 10000) {
      error = maxLength;
    }
    return error;
  };

  const validateFuente = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const validateFecha_modificacion = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 10) {
      error = maxLength;
    }
    return error;
  };

  const validateUser_modificacion = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 20) {
      error = maxLength;
    }
    return error;
  };

  const validateRuta_img1 = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido una primera imagen");
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };
  const validateRuta_img2 = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido una segunda imagen");
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const validateRuta_img3 = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido una tercera imagen");
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const validateAlt_img1 = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido una primera descripción para la imagen");
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const validateAlt_img2 = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido una segunda descripción para la imagen");
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const validateAlt_img3 = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido una tercera descripción para la imagen");
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const validateVideo = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido un video");
    } else if (value.length > 100) {
      error = maxLength;
    }
    return error;
  };

  const validateTipo_video = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido tipo de video");
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };
  const validateCodigo_video = (value) => {
    let error;
    if (!value) {
      console.log("No se ha añadido codigo de video");
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };
  const validateCategoria = (value) => {
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

  
  useEffect(()=>{
    imgPreview()
  },[ruta])
  const imgPreview = () => {
    return ruta === "" ? (
      <span>Esperando carga de imagen</span>
    ) : (
      <div className="Card">
        <div className="Card-body">
          <div className="addnews_img_preview">
            <p>Imagen 1</p>
            <img src={ruta} />
            {console.log(ruta)}
          </div>
          <div className="addnews_img_preview">
            <p>Imagen 2</p>
            <img />
          </div>
          <div className="addnews_img_preview">
            <p>Imagen 3</p>
            <img />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <AdminHeader />
      <Formik
        initialValues={{
          categoria: "",
          fecha: "",
          hora: "",
          user_creacion: "",
          fecha_creacion: "",
          titulo: "",
          intro: "",
          titulo_seo: "",
          contenido: "",
          fuente: "",
          fecha_modificacion: "",
          user_modificacion: "",
          ruta_img1: "",
          alt_img1: "",
          ruta_img2: "",
          alt_img2: "",
          ruta_img3: "",
          alt_img3: "",
          video: "",
          codigo_video: "",
          tipo_video: "",
          visitas: 0,
          publicar: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post(
              "http://localhost:3001/digitalhub/addtonews",
              values,
              values,
              {
                headers: {
                  accessToken: localStorage.getItem("accessToken"),
                },
              }
            )
            .then((res) => {
              if (res.data.error) {
                console.log(res.data.error);
              } else {
                console.log(JSON.stringify(values, null, 2));
                console.log("success");
                setSubmitting(false);
                navigate("/admin/dashboard");
              }
            });
        }}
      >
        {({ errors, touched, isValidating }) => (
          <div className="container">
            <div className="row iconXPos">
              <span onClick={handleClose} className="iconX">
                <i class="fas fa-xmark"></i>
              </span>
            </div>
            <div className="col-lg-12">
              <h3 className="text-center add_edit_title">Añadir Noticia</h3>
            </div>
            <div className="row">
              <div className="col-lg-10">
                <Form>
                  <div className="form-group">
                    <label htmlFor="Categoria">Categoria</label>
                    <Field
                      id="categoria"
                      className="form-control"
                      as="select"
                      name="categoria"
                    >
                      <option>Seleccionar</option>
                      <option value="2">Nota de prensa</option>
                      <option value="3">Eventos</option>
                      <option value="4">Actualidad</option>
                    </Field>
                  </div>
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
                    <label htmlFor="user_creacion">Creador</label>
                    <Field
                      id="user_creacion"
                      type="text"
                      name="user_creacion"
                      className="form-control"
                      placeholder="usuario que crea la noticia"
                      validate={validateUser_creacion}
                    />
                    {errors.titulo &&
                      touched.titulo &&
                      errorMessage(errors.titulo)}
                  </div>
                  <div className="form-group">
                    <label htmlFor="fecha_creacion">Fecha Creación</label>
                    <Field
                      id="fecha_creación"
                      className="form-control"
                      type="date"
                      placeholder="fecha de creación"
                      name="fecha_creacion"
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
                    <label htmlFor="intro">Introducción</label>
                    <Field
                      id="intro"
                      type="text"
                      name="intro"
                      className="form-control"
                      placeholder="intro"
                      validate={validateIntro}
                    />
                    {errors.intro &&
                      touched.intro &&
                      errorMessage(errors.intro)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contenido">Contenido</label>
                    <Field
                      id="contenido"
                      component="textarea"
                      rows="20"
                      name="contenido"
                      className="form-control"
                      placeholder="contenido"
                      validate={validateContenido}
                    />
                    {errors.contenido &&
                      touched.contenido &&
                      errorMessage(errors.contenido)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fuente">Fuente</label>
                    <Field
                      id="fuente"
                      type="text"
                      name="fuente"
                      className="form-control"
                      placeholder="fuente"
                      validate={validateFuente}
                    />
                    {errors.fuente &&
                      touched.fuente &&
                      errorMessage(errors.fuente)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="ruta_img1">Ruta de la Imagen 1</label>
                    <Field
                      id="ruta_img1"
                      type="text"
                      name="ruta_img1"
                      className="form-control"
                      placeholder="imagen 1"
                      validate={validateRuta_img1}
                      defaultValue={ruta_img1}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ruta_img2">Ruta de la Imagen 2</label>
                    <Field
                      id="ruta_img2"
                      type="text"
                      name="ruta_img2"
                      className="form-control"
                      placeholder="imagen 2"
                      validate={validateRuta_img2}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ruta_img3">Ruta de la Imagen 3</label>
                    <Field
                      id="ruta_img3"
                      type="text"
                      name="ruta_img3"
                      className="form-control"
                      placeholder="imagen 3"
                      validate={validateRuta_img3}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="alt_img1">Descripcion Imagen 1</label>
                    <Field
                      id="alt_img1"
                      type="text"
                      name="alt_img1"
                      className="form-control"
                      placeholder="Descripcion imagen 1"
                      validate={validateAlt_img1}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="alt_img2">Descripcion Imagen 2</label>
                    <Field
                      id="alt_img2"
                      type="text"
                      name="alt_img2"
                      className="form-control"
                      placeholder="Descripcion imagen 2"
                      validate={validateAlt_img2}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="alt_img3">Descripcion Imagen 3</label>
                    <Field
                      id="alt_img3"
                      type="text"
                      name="alt_img3"
                      className="form-control"
                      placeholder="Descripcion imagen 3"
                      validate={validateAlt_img3}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tipo_video">Tipo/Origen de video</label>
                    <Field
                      id="tipo_video"
                      className="form-control"
                      as="select"
                      name="tipo_video"
                      validate={validateTipo_video}
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
                      validate={validateCodigo_video}
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
                  <div className="col-lg-2"></div>
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
              <div className="col-lg-2">
                <MulterTest updateRuta={(ruta) => setRuta(ruta)} />

                {imgPreview()}
              </div>
            </div>
          </div>
        )}
      </Formik>
      <AdminFooter />
    </>
  );
};

export default AddNews;
