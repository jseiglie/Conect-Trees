import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

const EditColab = () => {
  const { authState } = useContext(AuthContext);
  

  useEffect(() => {
    if (!authState) navigate("/admin");
     // eslint-disable-next-line
  }, []);


  const navigate = useNavigate();
  let { id } = useParams();
  const [editColaborador, setEditColaborador] = useState([]);
  // Messages
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";

  // Error Component
  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const dataLoad = async () => {
    const data = await axios.get(
      `http://localhost:3001/digitalhub/colaboradores/edit/${id}`
    );
    setEditColaborador(data.data);
  };

  useEffect(() => {
    dataLoad();
     // eslint-disable-next-line
  }, []);

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

  const guide = () => (
    <>
      <p>nombre: {editColaborador.nombre}</p>
      <p>slug: {editColaborador.slug}</p>
      <p>url: {editColaborador.url}</p>
      <p>info: {editColaborador.info}</p>
      <p>logo: {editColaborador.logo}</p>
    </>
  );

  const handleSubmit = (values, { setSubmitting }) => {
    axios.put(
      `http://localhost:3001/digitalhub/colaboradores/edit/${editColaborador.id}`,
      values,
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
      
    );

    setSubmitting(false);
    alert("modificado correctamente");
    navigate("/admin/dashboard");
    handleClose();
  };

  const handleClose = () => {
    navigate("/admin/dashboard");
  };
  return (
    <>
    <div className="container-fluid">
      <AdminHeader/>
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
             <div className="row iconXPos">
          <span onClick={handleClose} className="iconX">
            <i class="fas fa-xmark"></i>
          </span>
        </div>
        <h3 className=" text-center add_edit_title">Editar Colaborador</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="card guia_video_noticia">
                  <div className="card-body">{guide()}</div>
                </div>
              </div>
              <div className="col-lg-8">
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
                    {errors.info && touched.info && errorMessage(errors.info)}
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
                    {errors.logo && touched.logo && errorMessage(errors.logo)}
                  </div>
                  <button 
                  className="btn btn-primary dashboard_btn__add"
                  type="submit">Modificar</button>
                
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
    <AdminFooter/>
    
    </>
  );
};

//AddColab.propTypes = {}

export default EditColab;
