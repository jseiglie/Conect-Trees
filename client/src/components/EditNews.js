import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Admin.css";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import { AuthContext } from "../helpers/AuthContext";

const EditNews = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState) navigate("/admin"); // eslint-disable-next-line
  }, []);

  const guide = () => {
    return (
      <>
        <p>Categoria: {news.categoria}</p>
        <p>Fecha: {news.fecha}</p>
        <p>Hora: {news.hora}</p>
        <p>User creacion: {news.user_creacion}</p>
        <p>Fecha creacion: {news.fecha_creacion}</p>
        <p>Titulo: {news.titulo}</p>
        <p>Introducción: {news.intro}</p>
        <p>Titulo seo: {news.titulo_seo}</p>
        <p>Contenido: {news.contenido}</p>
        <p>Fuente: {news.fuente}</p>
        <p>Fecha modificacion: {news.fecha_modificacion}</p>
        <p>User modificacion: {news.user_modificacion}</p>
        <p>Ruta img1: {news.ruta_img1}</p>
        <p>Alt img1: {news.alt_img1}</p>
        <p>Ruta img2: {news.ruta_img2}</p>
        <p>Alt img2: {news.alt_img2}</p>
        <p>Ruta img3: {news.ruta_img3}</p>
        <p>Alt img3: {news.alt_img3}</p>
        <p>Video: {news.video}</p>
        <p>Codigo_video: {news.codigo_video}</p>
        <p>Tipo de video: {news.tipo_video}</p>
        <p>Visitas: {news.visitas}</p>
        <p>Publicar: {news.publicar}</p>
      </>
    );
  };
  const dataLoad = async () => {
    const data = await axios.get(
      `http://localhost:3001/digitalhub/connecnews/edit/${id}`
    );
    setNews(data.data);
  };

  useEffect(() => {
    dataLoad(); // eslint-disable-next-line
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

  return (
    <>
      <AdminHeader />
      <Formik
        initialValues={{
          categoria: "",
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
          publicar: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios.put(
            `http://localhost:3001/digitalhub/addtonews/${news.id}`,
            values,
            {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }
          );
          // .then(console.log("testing"));
          // console.log(JSON.stringify(values, null, 2));
          alert("Noticia modificada correctamente");
          setSubmitting(false);
          console.log(values);
          navigate("/admin/dashboard");
        }}
      >
        {({ errors, touched, isValidating }) => (
          <div className="container">
            <div className="row iconXPos">
              <span onClick={handleClose} className="iconX">
                <i class="fas fa-xmark"></i>
              </span>
            </div>
            <div className="col-sm-12">
              <h3 className="text-center add_edit_title">Editar Noticia</h3>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">{guide()}</div>
                </div>
              </div>
              <div className="col-sm-7">
                <Form>
                  <div className="form-group">
                    <label htmlFor="Categoria">Categoria</label>
                    <Field
                      id="categoria"
                      name="categoria"
                      className="form-control"
                      as="select"
                    >
                      <option>Seleccionar</option>
                      <option value="2">Nota de prensa</option>
                      <option value="3">Eventos</option>
                      <option value="4">Actualidad</option>
                    </Field>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fecha_modificación">
                      Fecha de modificación
                    </label>
                    <Field
                      id="fecha_modificacion"
                      className="form-control"
                      type="date"
                      placeholder="fecha de modificacion"
                      name="fecha_modificación"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="user_modificacion">
                      Usuario que realiza la modificación
                    </label>
                    <Field
                      id="user_modificacion"
                      type="text"
                      name="user_modificacion"
                      className="form-control"
                      placeholder="usuario que modifica la noticia"
                      validate={validateUser_modificacion}
                    />
                    {errors.user_modificacion &&
                      touched.user_modificacion &&
                      errorMessage(errors.user_modificacion)}
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
                      component="textarea"
                      rows="5"
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
                <div className="Card">
                  <div className="Card-body">
                    <div className="addnews_img_preview">
                      <p>Imagen 1</p>
                      {news.ruta_img1 !== undefined ? (
                        <img src={news.ruta_img1} alt=""/>
                      ) : (
                        <p>No se cargo una imagen</p>
                      )}
                    </div>
                    <div className="addnews_img_preview">
                      <p>Imagen 2</p>
                      {news.ruta_img2 !== undefined ? (
                        <img src={news.ruta_img2} alt=""/>
                      ) : (
                        <p>No se cargo una imagen</p>
                      )}
                    </div>
                    <div className="addnews_img_preview">
                      <p>Imagen 3</p>
                      {news.ruta_img3 !== undefined ? (
                        <img src={news.ruta_img3} alt=""/>
                      ) : (
                        <p>No se cargo una imagen</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
      <AdminFooter />
    </>
  );
};

export default EditNews;
