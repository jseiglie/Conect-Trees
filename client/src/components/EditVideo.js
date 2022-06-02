import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import "../styles/AddVideo.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

const EditVideo = () => {
  const urlAdmin = process.env.REACT_APP_digitalhub_admin;
  const url = process.env.REACT_APP_digitalhub;
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const [video, setVideo] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    if (!authState) navigate("/admin");
     // eslint-disable-next-line
  }, []);

  const handleClose = () => {
    navigate("/admin/dashboard");
  };

  // Messages
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";

  // Error Component
  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const dataLoad = async () => {
    const data = await axios.get(
      `${url}/editvideo/${id}`
    );
    setVideo(data.data);
  };

  useEffect(() => {
    dataLoad();
     // eslint-disable-next-line
  }, []);

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

  return (
    <>
      <AdminHeader />
      <div className="container">
        <div className="row iconXPos">
          <span onClick={handleClose} className="iconX">
            <i className="fas fa-xmark"></i>
          </span>
        </div>
        <h3 className=" text-center add_edit_title">Editar video-noticia</h3>
        <div className="row">
          <div className="col-lg-4">
            <div className="card guia_video_noticia">
              <div className="card-body ">
                <p>Fecha: {video.fecha} </p>
                <p>Hora: {video.hora} </p>
                <p>Titulo: {video.titulo} </p>
                <p>Titulo SEO: {video.titulo_seo} </p>
                <p>Tipo de video: {video.tipo} </p>
                <p>Codigo de video: {video.codigo} </p>
                <p>Sección: {video.seccion} </p>
                <p>Publicar: {video.publicar} </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
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
                axios.put(
                  `${url}/editvideo/${video.id}`,
                  values,
                  {
                    headers: {
                      accessToken: localStorage.getItem("accessToken"),
                    },
                  }
                );
               alert("Noticia-video modificado correctamente");
                setSubmitting(false);
                navigate("/admin/dashboard");
              }}
            >
              {({ errors, touched, isValidating }) => (
                <div className="container">
                  <div className="col-sm-12"></div>
                  <div className="col-sm-12">
                    <Form>
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
                        <label htmlFor="tipo_video">Tipo de video</label>
                        <Field
                          id="tipo_video"
                          className="form-control"
                          as="select"
                          name="tipo"
                          validate={validateTipo}
                        >
                          <option defaultValue={video.tipo}>Seleccionar</option>
                          <option value="youtube">youtube</option>
                          <option value="vimeo">vimeo</option>
                        </Field>

                        {errors.tipo &&
                          touched.tipo &&
                          errorMessage(errors.tipo)}
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
                          <option defaultValue={video.seccion}>
                            Seleccionar
                          </option>
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

                      <div className="form-group btn-group">
                        <button
                          className="btn btn-primary dashboard_btn__add"
                          type="submit"
                        >
                          Guardar
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default EditVideo;
